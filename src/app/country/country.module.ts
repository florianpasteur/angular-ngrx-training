import {CountrySelectorComponent} from './country-selector/country-selector.component';
import {NgModule} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {BrowserModule} from '@angular/platform-browser';
import {CountryService} from './service/country.service';

@NgModule({
  declarations: [
    CountrySelectorComponent,
  ],
  imports: [
    BrowserModule,
    MatIconModule,
  ],
  exports: [
    CountrySelectorComponent,
  ],
  providers: [
    CountryService,
  ],
})
export class CountryModule {
}
