import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiHttpClient } from '../shared/api/api-client.http';

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {

  constructor(private apiHttpClient: ApiHttpClient) { }

  getMarketIndexNameList(): Observable<string[]> {
    return this.apiHttpClient.get<string[]>('dictionary/marketIndexName')
  }
}
