import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { TablesComponent } from "./pages/tables/tables.component";
import { FormsComponent } from "./pages/forms/forms.component";
import { TypographyComponent } from "./pages/typography/typography.component";
import { MapsComponent } from "./pages/maps/maps.component";
import { NotificationsComponent } from "./pages/notifications/notifications.component";
import { Cls10Component } from "./cls10/cls10.component";
import { Cls11Component } from "./cls11/cls11.component";
import { Cls12Component } from "./cls12/cls12.component";
import { JeeComponent } from "./jee/jee.component";
import { OxygenComponent } from "./oxygen/oxygen.component";
import { BedsComponent } from "./beds/beds.component";
import { AmbulanceComponent } from "./ambulance/ambulance.component";
import { VolsComponent } from "./vols/vols.component";

const routes: Routes = [
  { path: "", redirectTo: "/dashboard", pathMatch: "full" },
  { path: "dashboard", component: DashboardComponent },
  { path: "forms", component: FormsComponent },
  { path: "tables", component: TablesComponent },
  { path: "typography", component: TypographyComponent },
  { path: "maps", component: MapsComponent },
  { path: "notifications", component: NotificationsComponent },
  // { path: "class_10", component: Cls10Component },
  //{ path: "class_11", component: Cls11Component },
  // { path: "class_12", component: Cls12Component },
  // { path: "jee", component: JeeComponent },
  { path: "oxygen", component: OxygenComponent },
  { path: "beds", component: BedsComponent },
  { path: "ambu", component: AmbulanceComponent },
  { path: "volunteers", component: VolsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
