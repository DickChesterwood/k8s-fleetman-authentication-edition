
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Inject } from '@angular/core';

import { AppComponent } from './app.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { VehicleService } from './vehicle.service';

import { HttpClientModule }    from '@angular/common/http';
import { MapComponent } from './map/map.component';

import { LeafletModule } from '@bluehalo/ngx-leaflet';

import { HeaderComponent } from './header/header.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    LeafletModule,
    NgbModule,
    HeaderComponent
  ],
  providers: [VehicleService],
  // not sure if this needs to move? bootstrap: [AppComponent]
})
export class AppModule {
}
