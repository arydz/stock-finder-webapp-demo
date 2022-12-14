import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { StockService } from './../../../service/stock.service';

@Component({
  selector: 'app-stock-import',
  templateUrl: './stock-import.component.html',
  styleUrls: ['./stock-import.component.css']
})
export class StockImportComponent {

  constructor(private stockService: StockService) { }

  response$: Observable<String>

  importStockData() {
    this.response$ = this.stockService.importStockData();
  }

}
