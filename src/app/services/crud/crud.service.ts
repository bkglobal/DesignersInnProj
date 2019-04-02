import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';


@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private http:HttpClient) { }

  cud(query) {
    let data= {
      query :  query
    }
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    headers.append('Access-Control-Allow-Origin', 'http://localhost/BBMS/apps/BillBoard/BBDelete.php');
    // console.log(data);
    return this.http.post('http://localhost/BBMS/apps/BillBoard/BB_CUD.php', data, { headers: headers })
      .map((res) => res);
  }

  fetch(query) {
    let data= {
      query :  query
    }
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    headers.append('Access-Control-Allow-Origin', 'http://localhost/BBMS/apps/BillBoard/BBDelete.php');
    // console.log(data);
    return this.http.post('http://localhost/BBMS/apps/BillBoard/BB_FETCH.php', data, { headers: headers })
      .map((res) => res);
  }


}
