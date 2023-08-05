import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {KendoComponent} from "./components/kendo/kendo.component";
import {MainComponent} from "./components/main/main.component";
import {AppComponent} from "./app.component";
import {NotificationAddEditComponent} from "./components/notification-add-edit/notification-add-edit.component";

const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  { path: 'main', component: MainComponent },
  { path: 'kendo', component: KendoComponent },
  { path: 'appRoot', component: AppComponent },
  { path: 'notificationAddEdit', component: NotificationAddEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
