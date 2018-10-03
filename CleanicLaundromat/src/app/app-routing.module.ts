import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SelfServiceComponent} from './self-service/self-service.component';
import { DropOffComponent } from './drop-off/drop-off.component';

const routes: Routes = [
  {path: 'self-service', component: SelfServiceComponent},  
  {path: 'drop-off', component: DropOffComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [SelfServiceComponent, DropOffComponent]
