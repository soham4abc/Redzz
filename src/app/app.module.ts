import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { CollapseModule } from "ngx-bootstrap/collapse";
import { ToastrModule } from "ngx-toastr";

import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from "./app.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { FooterComponent } from "./components/footer/footer.component";
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
import { DonateComponent } from "./donate/donate.component";
import { LocationStrategy, HashLocationStrategy } from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    DashboardComponent,
    TablesComponent,
    FormsComponent,
    TypographyComponent,
    MapsComponent,
    NotificationsComponent,
    Cls10Component,
    Cls11Component,
    Cls12Component,
    JeeComponent,
    OxygenComponent,
    BedsComponent,
    AmbulanceComponent,
    VolsComponent,
    DonateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    BrowserAnimationsModule,
    CollapseModule.forRoot(),
    ToastrModule.forRoot(),
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
