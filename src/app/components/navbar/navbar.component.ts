import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  isAdminPanel() {
    if (this.router.url === '/dashboard' || this.router.url === '/dashboard/manage-user' || this.router.url === '/dashboard/manage-post') {
      return true;
    } else {
      return false;
    }
  }

}
