import { JsonAppConfigService } from './shared/config/json-app-config.service';
import { NgModule, ErrorHandler, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { StockComponent } from './pages/stock/stock.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { MatTabsModule } from '@angular/material/tabs';
import { StockListComponent } from './pages/stock/stock-list/stock-list.component';
import { StockImportComponent } from './pages/stock/stock-import/stock-import.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSelectModule} from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { SfErrorHandlerService } from './service/sf-error-handler.service';
import { AppConfig } from './shared/config/app-config.model';
import { ChartImportComponent } from './pages/stock/chart-import/chart-import.component';

export function initializerFn(jsonAppConfigService: JsonAppConfigService) {
  return () => {
    return jsonAppConfigService.load();
  };
}

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    StockComponent,
    DashboardComponent,
    StockListComponent,
    StockImportComponent,
    ChartImportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatTabsModule,
    MatProgressBarModule,
    MatGridListModule,
    MatSelectModule,
    MatCardModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    HttpClientModule,
    MatSnackBarModule,
  ],
  providers: [
    {
      provide: ErrorHandler,
      useClass: SfErrorHandlerService
    },
    {
      provide: AppConfig,
      deps: [HttpClient],
      useExisting: JsonAppConfigService
    },
    {
      provide: APP_INITIALIZER,
      multi: true,
      deps: [JsonAppConfigService],
      useFactory: initializerFn
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
