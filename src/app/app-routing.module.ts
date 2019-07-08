import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AltClientComponent } from './modules/alt-client/alt-client.component';
import { AltItemComponent } from './modules/alt-item/alt-item.component';
import { AltOrderComponent } from './modules/alt-order/alt-order.component';

const routes: Routes = [
  { path: '', redirectTo: '/client', pathMatch: 'full' },
  { path: 'client', component: AltClientComponent },
  { path: 'item', component: AltItemComponent },
  { path: 'order', component: AltOrderComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
