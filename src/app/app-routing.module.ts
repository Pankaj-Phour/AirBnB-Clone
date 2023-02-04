import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './landing/home/home.component';
import { TopComponent } from './user/top/top.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'', component:TopComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
