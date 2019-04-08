import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';


@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private http: HttpClient) { }

  cud(query) {
    const data = { query };

    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    headers.append('Access-Control-Allow-Origin', 'http://localhost/designers_inn_php/app/cud.php');
    // console.log(data);
    return this.http.post('http://localhost/designers_inn_php/app/cud.php', data, { headers })
      .map((res) => res);
  }

  fetch(query) {
    const data = { query };
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    headers.append('Access-Control-Allow-Origin', 'http://localhost/designers_inn_php/app/fetch.php');
    // console.log(data);
    return this.http.post('http://localhost/designers_inn_php/app/fetch.php', data, { headers })
      .map((res) => {
        return JSON.parse(JSON.parse(JSON.stringify(res))).tasks;
      });
  }


}
