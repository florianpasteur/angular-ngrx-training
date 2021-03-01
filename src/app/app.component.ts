import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-ngrx-training';

  constructor(private router: Router) {

  }

  openCart() {
    this.router.navigate(['cart'])
  }

  openCatalog() {
    this.router.navigate([''])

  }
}
