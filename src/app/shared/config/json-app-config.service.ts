import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { AppConfig } from './app-config.model';

@Injectable({
  providedIn: 'root'
})
export class JsonAppConfigService extends AppConfig {

  constructor(private http: HttpClient) {
    super();
  }

  env: string

  async load() {

    const data = await lastValueFrom(this.http.get<AppConfig>('app.config.json'));
    this.backendUrl = data.backendUrl
  }
}
