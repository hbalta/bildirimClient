import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LastFewTransactionsComponent } from './components/last-few-transactions/last-few-transactions.component';
import { MainComponent } from './components/main/main.component';
import { SalesByCategoryComponent } from './components/sales-by-category/sales-by-category.component';
import { SalesByMonthComponent } from './components/sales-by-month/sales-by-month.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { TopThreeProductsComponent } from './components/top-three-products/top-three-products.component';
import { TopWidgetsComponent } from './components/top-widgets/top-widgets.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ChartModule } from 'angular-highcharts';
import { MiddleComponent } from './components/middle/middle.component';
import { KendoComponent } from './components/kendo/kendo.component';
import { SparklineModule } from '@progress/kendo-angular-charts';
import {
  GridModule,
  PDFModule,
  ExcelModule,
} from "@progress/kendo-angular-grid";
import { RatingComponent } from './components/rating/rating.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LastFewTransactionsComponent,
    MainComponent,
    SalesByCategoryComponent,
    SalesByMonthComponent,
    SideNavComponent,
    TopThreeProductsComponent,
    TopWidgetsComponent,
    MiddleComponent,
    KendoComponent,
    RatingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    ChartModule,
    SparklineModule,
    GridModule,
    PDFModule,
    ExcelModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
