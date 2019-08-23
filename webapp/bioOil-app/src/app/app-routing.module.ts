import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GoodsComponent } from './goods/goods.component';
import { OrderComponent } from './order/order.component';
import { ProComponent } from './pro/pro.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'goods', component: GoodsComponent },
  { path: 'order', component: OrderComponent },
  { path: 'pro', component:  ProComponent },
  { path: 'contactUs', component:  ContactComponent }, 
  { path: 'home', component: HomeComponent},
  { path: 'login', component: LoginComponent}
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
