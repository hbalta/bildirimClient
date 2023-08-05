import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";

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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { NotificationAddEditComponent } from './components/notification-add-edit/notification-add-edit.component';
import {DropDownsModule} from "@progress/kendo-angular-dropdowns";
import { InputsModule } from "@progress/kendo-angular-inputs";
import { LayoutModule } from "@progress/kendo-angular-layout";



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
    RatingComponent,
    LoginComponent,
    NotificationAddEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    ChartModule,
    SparklineModule,
    GridModule,
    PDFModule,
    ExcelModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    DateInputsModule,
    ButtonsModule,
    DropDownsModule,
    InputsModule,
    LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
