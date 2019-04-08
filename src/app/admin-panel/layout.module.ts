import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ManageUserComponent } from './components/manage-user/manage-user.component';
import { ManagePostsComponent } from './components/manage-posts/manage-posts.component';

@NgModule({
  declarations: [
    LayoutComponent,
    NavbarComponent,
    // DashboardComponent,
    // ManageUserComponent,
    // ManagePostsComponent
  ],
  imports: [
    BrowserModule,
    LayoutRoutingModule
  ],
  providers: [],
  bootstrap: [LayoutComponent]
})
export class LayoutModule { }
