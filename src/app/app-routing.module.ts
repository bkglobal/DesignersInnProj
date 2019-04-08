import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { DashboardComponent } from './admin-panel/components/dashboard/dashboard.component';
import { DetailComponent } from './components/detail/detail.component';
import { TimelineComponent } from './components/timeline/timeline.component';
import { LoginComponent } from './components/login/login.component';
import { ManageUserComponent } from './admin-panel/components/manage-user/manage-user.component';
import { ManagePostsComponent } from './admin-panel/components/manage-posts/manage-posts.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'profile/:id', component: ProfileComponent },
  { path: 'detail/:id', component: DetailComponent },
  { path: 'timeline', component: TimelineComponent },
  // { path: 'dashboard', loadChildren: './admin-panel/layout.module#LayoutModule' },
  { path: 'dashboard', component: DashboardComponent,
      children : [
        {path: 'manage-user', component: ManageUserComponent},
        {path: 'manage-post', component: ManagePostsComponent}
      ]},
  { path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
