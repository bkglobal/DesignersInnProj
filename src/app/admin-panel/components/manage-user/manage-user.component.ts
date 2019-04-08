import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../../services/crud/crud.service';

@Component({
  selector: 'app-manage-user',
  templateUrl: './manage-user.component.html',
  styleUrls: ['./manage-user.component.scss']
})
export class ManageUserComponent implements OnInit {
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
}
