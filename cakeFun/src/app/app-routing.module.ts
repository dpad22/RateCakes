import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CakeNewComponent } from './cakeComponents/cake-new/cake-new.component';
import { CakelistComponent } from './cakeComponents/cakelist/cakelist.component';


const routes: Routes = [
  { path: 'cakes', component: CakelistComponent},
  { path: 'cakes/new', component: CakeNewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
