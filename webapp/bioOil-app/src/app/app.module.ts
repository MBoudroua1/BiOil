import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponentComponent } from './Dashboard/dashboard-component/dashboard-component.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OrderComponent } from './order/order.component';
import { GoodsComponent } from './goods/goods.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponentComponent,
    DashboardComponent,
    OrderComponent,
    GoodsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
