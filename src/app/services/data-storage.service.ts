import { Injectable } from '@angular/core';
import { Http } from "@angular/http";

@Injectable()
export class DataStorageService {

  constructor(private http: Http) { }

  get(storage: string) {
    return this.http.get(`https://knowledge-33ee3.firebaseio.com/${storage}`);
  }
  post(storage: string, object: any) {
    return this.http.post(`https://knowledge-33ee3.firebaseio.com/${storage}`, object);
  }
  put(storage: string, object: any) {
    return this.http.put(`https://knowledge-33ee3.firebaseio.com/${storage}`, object);
  }
  delete(storage: string, id: number) {
    return this.http.delete(`https://knowledge-33ee3.firebaseio.com/${storage}/${id.toString()}`);  
  }
}
