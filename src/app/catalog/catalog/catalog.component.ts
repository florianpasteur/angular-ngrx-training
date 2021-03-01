import {Component, OnInit} from '@angular/core';
import {ProductItem} from '../product-item';
import {CatalogService} from '../service/catalog.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css'],
})
export class CatalogComponent implements OnInit {

  catalog: ProductItem[] = [];

  constructor(private catalogService: CatalogService) {
  }

  ngOnInit(): void {
    this.catalogService.loadArticles(0)
      .subscribe((value) => {
        this.catalog = value;
      })
  }


  nextPage() {
  }
}
