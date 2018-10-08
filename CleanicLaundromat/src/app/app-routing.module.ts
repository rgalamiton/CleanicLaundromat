import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SelfServiceComponent} from './self-service/self-service.component';
import { DropOffComponent } from './drop-off/drop-off.component';
import { SelfServiceReceiptComponent } from './self-service/self-service-receipt/self-service-receipt.component';

const routes: Routes = [
  {path: 'self-service', component: SelfServiceComponent},  
  {path: 'drop-off', component: DropOffComponent },
  {path: 'sel-service-receipt', component:  SelfServiceReceiptComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [SelfServiceComponent, DropOffComponent, SelfServiceReceiptComponent]
