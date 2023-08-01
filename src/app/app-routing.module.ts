import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {KendoComponent} from "./components/kendo/kendo.component";
import {MainComponent} from "./components/main/main.component";

const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  { path: 'main', component: MainComponent },
  { path: 'kendo', component: KendoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
