import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BiddingRoutingModule } from './bidding-routing.module';
import { BiddingComponent } from './bidding.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatSidenavModule } from '@angular/material/sidenav';
import { FormsModule } from '@angular/forms';
import { BiddingChildComponent } from './bidding-child/bidding-child.component';
@NgModule({
  declarations: [BiddingComponent, BiddingChildComponent],
  imports: [
    CommonModule,
    BiddingRoutingModule,
    MatToolbarModule,
    MatButtonToggleModule,
    FormsModule,
    MatSidenavModule,
    MatExpansionModule
  ]
})
export class BiddingModule {}
