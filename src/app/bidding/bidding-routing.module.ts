import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BiddingChildComponent } from './bidding-child/bidding-child.component';
import { BiddingComponent } from './bidding.component';

const routes: Routes = [
  {
    path: '',
    component: BiddingComponent,
    children: [
      {
        path: '',
        component: BiddingChildComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BiddingRoutingModule { }
