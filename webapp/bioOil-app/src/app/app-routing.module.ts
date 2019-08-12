import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GoodsComponent } from './goods/goods.component';
import { OrderComponent } from './order/order.component';
import { ProComponent } from './pro/pro.component';
import { ContactComponent } from './contact/contact.component';


const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'goods', component: GoodsComponent },
  { path: 'order', component: OrderComponent },
  { path: 'pro', component:  ProComponent },
  { path: 'contactUs', component:  ContactComponent }
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
