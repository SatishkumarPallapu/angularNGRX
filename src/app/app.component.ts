import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  count = 0;
  counterObs$: Observable<any>

  constructor(private store: Store<any>) {
    // this.store.subscribe(value => {
    //   this.count = value.count
    // })

    this.counterObs$ = this.store.select('count')

  }

}
