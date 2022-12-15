import { HttpClient, HttpHandler, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AppConfig } from '../config/app-config.model';

const jsonHttpOptions: Object = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  }),
  responseType: 'text'
}

@Injectable({
  providedIn: 'root'
})
export class ApiHttpClient {
  public baseUrl: string;

  public constructor(private httpClient: HttpClient, config: AppConfig) {

    this.baseUrl = config.backendUrl;
  }

  public get<T>(url: string, options?: Object): Observable<T> {

    url = this.baseUrl + url;
    return this.httpClient.get<T>(url, options);
  }

  public post<T>(url: string, payload: Object): Observable<T> {

    url = this.baseUrl + url;
    return this.httpClient.post<T>(url, payload, jsonHttpOptions);
  }

  public postFormData<T>(url: string, formData: FormData): Observable<T> {

    url = this.baseUrl + url;
    return this.httpClient.post<T>(url, formData);
  }

  public put<T>(url: string, formData: FormData): Observable<T> {
    url = this.baseUrl + url;
    return this.httpClient.put<T>(url, formData)
  }
}
