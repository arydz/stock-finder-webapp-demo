import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ApiHttpClient } from '../shared/api/api-client.http';
import { Page } from '../shared/api/page.model';
import { ServerPageable } from '../shared/api/server-pageable.model';
import { Stock } from '../shared/stock.model';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  constructor(private httpClient: ApiHttpClient) { }

  findAll(params: HttpParams): Observable<Page<Stock>> {

    return this.httpClient.get<ServerPageable<Stock>>("stock", { params: params })
      .pipe(
        map((response) => {
          return new Page<Stock>(response.content, response.size, response.totalElements);
        })
      );
  }

  importStockData(): Observable<String> {
    return this.httpClient.post<String>("stock", {})
  }

}
