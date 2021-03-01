import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {delay} from 'rxjs/operators';
import {ProductItem} from '../product-item';

@Injectable()
export class CatalogService {


  private readonly mock: ProductItem[] = [
    {
      name: 'Product A',
      price: 215,
      img: '/assets/product-images/product-1.png',
    }, {
      name: 'Product B',
      price: 314,
      img: '/assets/product-images/product-2.png',
    }, {
      name: 'Product C',
      price: 230,
      img: '/assets/product-images/product-3.png',
    }, {
      name: 'Product D',
      price: 64,
      img: '/assets/product-images/product-4.png',
    }, {
      name: 'Product E',
      price: 431,
      img: '/assets/product-images/product-5.png',
    }, {
      name: 'Product F',
      price: 319,
      img: '/assets/product-images/product-6.png',
    }, {
      name: 'Product G',
      price: 515,
      img: '/assets/product-images/product-7.png',
    }, {
      name: 'Product H',
      price: 264,
      img: '/assets/product-images/product-8.png',
    }, {
      name: 'Product I',
      price: 322,
      img: '/assets/product-images/product-9.png',
    }, {
      name: 'Product J',
      price: 430,
      img: '/assets/product-images/product-10.png',
    }, {name: 'Product K', price: 165, img: '/assets/product-images/product-11.png'}, {
      name: 'Product L',
      price: 342,
      img: '/assets/product-images/product-1.png',
    }, {name: 'Product M', price: 334, img: '/assets/product-images/product-2.png'}, {
      name: 'Product N',
      price: 60,
      img: '/assets/product-images/product-3.png',
    }, {name: 'Product O', price: 445, img: '/assets/product-images/product-4.png'}, {
      name: 'Product P',
      price: 334,
      img: '/assets/product-images/product-5.png',
    }, {name: 'Product Q', price: 271, img: '/assets/product-images/product-6.png'}, {
      name: 'Product R',
      price: 307,
      img: '/assets/product-images/product-7.png',
    }, {name: 'Product S', price: 453, img: '/assets/product-images/product-8.png'}, {
      name: 'Product T',
      price: 78,
      img: '/assets/product-images/product-9.png',
    }];


  constructor() {
  }

  loadArticles(page = 0): Observable<ProductItem[]> {
    return of(this.mock.slice(page * 10, (page + 1) * 10)).pipe(delay(250))
  }

  loadArticlesLazy(page = 0): Observable<ProductItem> {
    return of(...this.mock.slice(page * 10, (page + 1) * 10)).pipe(delay(350))
  }
}
