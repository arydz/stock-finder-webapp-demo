import { ImportType, ImportTypeRequest } from './../../../shared/import-type.enum';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { forkJoin, Observable, shareReplay } from 'rxjs';
import { DictionaryService } from 'src/app/service/dictionary.service';
import { FileUploadService } from '../../../service/file-upload.service';
import { DescriptiveType } from './../../../shared/descriptive-type';

@Component({
  selector: 'app-chart-import',
  templateUrl: './chart-import.component.html',
  styleUrls: ['./chart-import.component.css']
})
export class ChartImportComponent implements OnInit {

  fileImportForm!: FormGroup;

  selectedFiles?: FileList;

  chartTimeframeTypes: DescriptiveType[]
  extractionModes: DescriptiveType[]

  isFetched: boolean = false;

  importTypes = Object.values(ImportType);
  selectedImportType: ImportType = ImportType.MARKET;

  constructor(private fileUploadService: FileUploadService,
    private dictionaryService: DictionaryService,
    private snackBar: MatSnackBar) { }

  ngOnInit() {
    let chartTimeframeResponse = this.getChartTimeframeTypeNameList();
    let extractionModeResponse = this.getExtractionModeNameList();

    forkJoin([chartTimeframeResponse, extractionModeResponse]).subscribe(results => {
      this.chartTimeframeTypes = results[0]
      this.extractionModes = results[1]
      this.isFetched = true;
    });

    this.fileImportForm = new FormGroup({
      importType: new FormControl(ImportType.MARKET),
      file: new FormControl(''),
      chartTimeframeType: new FormControl('', [Validators.required]),
      extractionMode: new FormControl('', [Validators.required])
    });
  }

  getChartTimeframeTypeNameList(): Observable<DescriptiveType[]> {
    return this.dictionaryService.getDictionaryDescriptiveType("chartTimeframeType");
  }

  getExtractionModeNameList(): Observable<DescriptiveType[]> {
    return this.dictionaryService.getDictionaryDescriptiveType("extractionMode");
  }

  onSubmit(fileImportFormValue: any, formDirective: FormGroupDirective) {

    if (this.fileImportForm.valid) {
      this.performFileUpload(fileImportFormValue, formDirective);
    }
  }

  private performFileUpload(fileImportFormValue: any, formDirective: FormGroupDirective) {

    if (this.selectedFiles) {
      const file: File | null = this.selectedFiles.item(0);

      const chartTimeframeType = fileImportFormValue.chartTimeframeType;
      const extractionMode = fileImportFormValue.extractionMode;

      if (file) {
        this.selectedFiles = undefined;
        this.fileImportForm.reset();
        formDirective.resetForm();
        this.showSnackBar('The file is being uploaded. For bigger files, it can take some time.', 'info-snack-bar');

        this.fileUploadService.importData(this.selectedImportType, file, chartTimeframeType, extractionMode).subscribe(response => {

          this.showSnackBar(`File uploaded successfully. Data imported for ${response} stocks`, 'success-snack-bar');
        })
      }

    }
  }

  private showSnackBar(message: string, cssClass: string) {
    this.snackBar.open(message, '', {
      verticalPosition: 'top',
      duration: 4000,
      panelClass: [cssClass, 'mat-snack-bar-container', 'mat-simple-snackbar']
    });
  }

  selectFile(event: any): void {
    this.selectedFiles = event.target.files;
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.fileImportForm.controls[controlName].hasError(errorName);
  }

  getImportTypeLabel(option: ImportType) {

    return option.valueOf();
  }
}
