import { HttpParamsFactory } from './../../../service/http-params-factory.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { PageEvent } from '@angular/material/paginator';
import { Sort, SortDirection } from '@angular/material/sort';
import { StockService } from 'src/app/service/stock.service';
import { Page } from 'src/app/shared/api/page.model';
import { Stock } from 'src/app/shared/stock.model';

@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.css']
})
export class StockListComponent implements OnInit {

  displayedColumns: string[] = ['ticker', 'title'];

  public searchParams = new FormGroup({
    ticker: new FormControl('', [Validators.maxLength(256)]),
    title: new FormControl('', [Validators.maxLength(256)]),
  });

  dataSource: Page<Stock>;

  pageEvent: PageEvent;
  sort: Sort;
  isFetched: boolean = false;
  private page: number = 0;
  private size: number = 20;
  private sortBy: string = "id";
  private sortDirection: SortDirection = 'asc';

  constructor(private stockService: StockService) { }

  ngOnInit() {
    this.findAll();
  }

  private findAll() {

    const httpParams = HttpParamsFactory.getStockHttpParams(this.searchParams, this.page, this.size, this.sortBy, this.sortDirection);

    this.stockService.findAll(httpParams).subscribe(data => {
      this.dataSource = data;
      this.isFetched = true;
    })
  }

  onSubmit(fileImportFormValue: any, formDirective: FormGroupDirective) {

    if (this.searchParams.valid) {
      this.findAll();
    }
  }

  sortData(sort: Sort) {

    if (sort.direction == '') {
      this.sortBy = "id";
      this.sortDirection = 'asc';
    } else {
      this.sortBy = sort.active;
      this.sortDirection = sort.direction;
    }
    this.findAll();
  }

  onPaginateChange(event: PageEvent) {
    this.page = event.pageIndex;
    this.size = event.pageSize;
    this.findAll();
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.searchParams.controls[controlName].hasError(errorName);
  }

}
