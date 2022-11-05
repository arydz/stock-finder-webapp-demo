import { HttpParams } from "@angular/common/http";
import { FormGroup } from "@angular/forms";
import { SortDirection } from "@angular/material/sort";

export class HttpParamsFactory {

  private constructor() {
    // this is helper class
  }

  public static getStockHttpParams(formGroup: FormGroup, page: number, size: number, sortBy: string, sortDirection: SortDirection): HttpParams {

    let params = new HttpParams();

    let ticker = formGroup.get('ticker').value;
    let title = formGroup.get('title').value;

    if (this.isNotEmpty(ticker)) {
      params = params.set('ticker', ticker.toString())
    }
    if (this.isNotEmpty(title)) {
      params = params.set('title', title.toString())
    }

    params = params
      .set('page', page.toString())
      .set('size', size.toString())
      .set('sortColumn', sortBy)
      .set('sortDirection', sortDirection.toUpperCase());
    return params;
  }

  private static isNotEmpty(obj) {
    return obj !== undefined && obj !== null && obj !== "";
  }
}
