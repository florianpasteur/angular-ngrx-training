import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {addCounter, AppState, resetCounter, selectCounter, setCounterTo, substractCounter} from '../store/app.store';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  public counter$ = this.store.select(selectCounter);

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
  }

  add() {
    this.store.dispatch(addCounter())
  }

  substract() {
    this.store.dispatch(substractCounter())
  }

  reset() {
    this.store.dispatch(resetCounter())
  }

  setTo10() {
    this.store.dispatch(setCounterTo({value: 10}))
  }

  setTo20() {
    this.store.dispatch(setCounterTo({value: 20}))
  }
}
