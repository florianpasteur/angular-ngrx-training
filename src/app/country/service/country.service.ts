import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {delay} from 'rxjs/operators';
import {CountryCode} from '../country.enum';

@Injectable()
export class CountryService {

  private readonly FR: CountryCode = 'FR';
  private readonly BE: CountryCode = 'BE';
  private readonly NL: CountryCode = 'NL';

  constructor() {
  }

  loadCountryVatSettings(): Observable<{ code: CountryCode, vat: number }[]> {
    return of([
      {code: this.FR, vat: 19},
      {code: this.BE, vat: 21},
      {code: this.NL, vat: 21},
    ]).pipe(delay(250))
  }

  loadCountryShippingCostSettings(): Observable<{ code: CountryCode, shippingCost: number }[]> {
    return of([
      {code: this.FR, shippingCost: 15},
      {code: this.BE, shippingCost: 10},
      {code: this.NL, shippingCost: 5},
    ]).pipe(delay(350))
  }
}
