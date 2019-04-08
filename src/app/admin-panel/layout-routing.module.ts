import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { DashboardComponent } from '../components/dashboard/dashboard.component';
// import { ManageUserComponent } from './components/manage-user/manage-user.component';
// import { ManagePostsComponent } from './components/manage-posts/manage-posts.component';



const routes: Routes = [
  // {path: '', component: DashboardComponent},
  // {path: 'manage-user', component: ManageUserComponent},
  // {path: 'manage-post', component: ManagePostsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
