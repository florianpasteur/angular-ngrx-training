import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {CartIconComponent} from './cart-icon.component';
import {MatIconModule} from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge';

@NgModule({
  declarations: [
    CartIconComponent,
  ],
  imports: [
    BrowserModule,
    MatIconModule,
    MatBadgeModule,
  ],
  exports: [
    CartIconComponent,
  ],
})
export class CartIconModule {
}
