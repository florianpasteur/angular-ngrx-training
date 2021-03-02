import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CatalogComponent} from './catalog/catalog/catalog.component';
import {CartComponent} from './cart/cart/cart.component';
import {CounterComponent} from './counter/counter.component';

const routes: Routes = [
  {path: '', component: CatalogComponent},
  {path: 'cart', component: CartComponent},
  {path: 'counter', component: CounterComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
