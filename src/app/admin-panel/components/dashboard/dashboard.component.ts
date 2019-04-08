import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../../services/crud/crud.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  users: any;
  constructor(private crud: CrudService) { }

  ngOnInit() {
    this.init();
  }

  init() {
    this.crud.fetch('select * from users').subscribe((res) => {
      this.users = res;
    });
  }


  removeUser(id) {
    this.crud.cud('delete from users where id = ' + id).subscribe((res) => {
      console.log('deleted');
      this.init();
    });
  }

}
