import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../services/crud/crud.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  users: any;
  constructor(private crud: CrudService) { }

  ngOnInit() {
    this.crud.fetch('select * from users').subscribe((res) => {
      console.log(res);
    });
  }

}
