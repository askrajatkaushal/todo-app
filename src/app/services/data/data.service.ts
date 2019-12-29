import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private static handleError(error) {
    console.log('Following error occurred while calling service :: ', error);
  }

  constructor(private http: HttpClient, private uri: string) {
  }

  getAll() {
    return this.http.get(this.uri);
  }

  get(key: any) {
    return this.http.get(`${this.uri}/${key}`);
  }

  create(data: any) {
    return this.http.post(this.uri, data);
  }

  update(data: any) {
    return this.http.put(this.uri, data);
  }

  delete(key: any) {
    return this.http.delete(`${this.uri}/${key}`);
  }
}
