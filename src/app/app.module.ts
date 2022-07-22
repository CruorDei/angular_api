import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegionComponent } from './page/region/region.component';
import { DepartementComponent } from './page/departement/departement.component';
import { HeaderComponent } from './page/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    RegionComponent,
    DepartementComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
