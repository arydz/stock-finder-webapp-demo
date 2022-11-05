import { HttpClient, HttpHandler, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AppConfig } from '../config/app-config.model';

const httpOptions: Object = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  }),
  responseType: 'text'
}

@Injectable({
  providedIn: 'root'
})
export class ApiHttpClient extends HttpClient {
  public baseUrl: string;

  public constructor(handler: HttpHandler, config: AppConfig) {
    super(handler);

    this.baseUrl = config.backendUrl;
  }

  public getUrl(): string {
    return this.baseUrl;
  }

  public override get<T>(url: string, options?: Object): Observable<T> {

    url = this.baseUrl + url;
    return super.get<T>(url, options);
  }

  public override post<T>(url: string, payload: Object): Observable<T> {

    url = this.baseUrl + url;
    return super.post<T>(url, payload, httpOptions);
  }
}
