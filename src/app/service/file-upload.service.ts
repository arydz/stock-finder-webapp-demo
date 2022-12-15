import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiHttpClient } from '../shared/api/api-client.http';
import { ImportType, ImportTypeRequest } from '../shared/import-type.enum';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  constructor(private apiHttpClient: ApiHttpClient) { }

  importData(importType: ImportType, file: File, chartTimeframeType: string, extractionMode: string): Observable<any> {

    const url = ImportTypeRequest.getUrl(importType)

    const formData: FormData = new FormData();
    formData.append('file', file as File);
    formData.append('chartTimeframeType', chartTimeframeType as string);
    formData.append('extractionMode', extractionMode as string);

    if (ImportType.MARKET == importType) {
      return this.apiHttpClient.put(url, formData)
    } else {
      return this.apiHttpClient.postFormData(url, formData)
    }
  }
}
