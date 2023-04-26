import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bidding-child',
  templateUrl: './bidding-child.component.html',
  styleUrls: ['./bidding-child.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BiddingChildComponent {
  constructor(private router: Router) {
    this.router.events.subscribe(console.log)
  }
}
