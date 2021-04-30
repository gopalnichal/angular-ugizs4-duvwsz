import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";

import { DashboardComponent } from "./dashboard/dashboard.component";
import { WorklistComponent } from "./worklist/worklist.component";
import { BuiComponent } from "./bui/bui.component";

const routes: Routes = [
  { path: "bui/:viewName", component: BuiComponent },
  { path: "bui/:viewName/:worklist", component: BuiComponent },
  { path: "", redirectTo: "bui/dashboard", pathMatch: "full" },
  { path: "**", redirectTo: "bui/dashboard", pathMatch: "full" }
];

@NgModule({
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(routes)],
  declarations: [
    AppComponent,
    DashboardComponent,
    WorklistComponent,
    BuiComponent
  ],
  bootstrap: [AppComponent],
  entryComponents: [WorklistComponent, DashboardComponent]
})
export class AppModule {}
