import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the OpengateProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class OpengateProvider {
  // headers;
  constructor(public http: HttpClient) {
    // console.log('Hello OpengateProvider Provider');
    // this.headers = new HttpHeaders();
    // this.headers.set("X-CSRFToken", '**');
  }

  open() {
    var response = this.http.get('http://192.168.4.1/?pin=ON').map(res => res);
    return response;
  }

  close() {
    var response = this.http.get('http://192.168.4.1/?pin=OFF').map(res => res);
    return response;
  }
}
