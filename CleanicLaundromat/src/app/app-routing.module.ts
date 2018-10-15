import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SelfServiceComponent} from './self-service/self-service.component';
import { DropOffComponent } from './drop-off/drop-off.component';
import { SelfServiceReceiptComponent } from './self-service/self-service-receipt/self-service-receipt.component';
import { InventoryComponent } from './inventory/inventory.component';

const routes: Routes = [
  {path: 'self-service', component: SelfServiceComponent},  
  {path: 'drop-off', component: DropOffComponent },
  {path: 'self-service-receipt', component:  SelfServiceReceiptComponent},
  {path: 'inventory', component: InventoryComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [SelfServiceComponent, DropOffComponent, SelfServiceReceiptComponent, InventoryComponent]
