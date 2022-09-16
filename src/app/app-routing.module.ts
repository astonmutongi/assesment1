import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  
  {
    path: 'user-list',
    component: UserListComponent
 },	
 {
    path: 'user-detail',
    component: UserDetailComponent   
 },
 {
  path: 'user-detail/:id',
  component: UserDetailComponent   
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
