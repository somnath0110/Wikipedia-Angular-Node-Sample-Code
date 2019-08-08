import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/Router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CityComponent } from './listOfCity/citylist.component';
import { HeaderComponent } from './header/header.component';
import { CityListService } from './listOfCity/citylist.service';
import { CountryCodePipe } from './listOfCity/countryCode.filter';
import { TrimPipe } from './listOfCity/description.filter';
import { CityListModule } from './listOfCity/cityList.module';
import { SerachCityPipe } from './listOfCity/filterCity.filter';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CityComponent,
    CountryCodePipe,
    TrimPipe,
    SerachCityPipe
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
        {path: 'home', component: CityComponent},
        {path: '', redirectTo: 'home', pathMatch: 'full'}
  ]),
    HttpClientModule,
    CityListModule,
    FormsModule
  ],
  providers: [
    CityListService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
