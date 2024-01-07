import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { decreaseAction, increaseAction, resetAction } from '../store/count.action';

@Component({
  selector: 'app-test-component',
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.css']
})
export class TestComponentComponent implements OnInit {

  constructor(private store: Store) { }

  ngOnInit(): void {
  }

  onIncrease() {
    this.store.dispatch(increaseAction())
  }

  onDecrease() {
    this.store.dispatch(decreaseAction())
  }

  onReset() {
    this.store.dispatch(resetAction())
  }



}
