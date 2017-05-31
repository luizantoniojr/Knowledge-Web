import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { AuthService } from "app/services/auth.service";

@Injectable()
export class DataStorageService {

  constructor(private http: Http, private authService: AuthService) { }

  getById(storage: string, id: string) {
    const token = this.authService.getToken();
    //ToDo: implementar um get por id aqui.
    return this.http.get(`https://knowledge-33ee3.firebaseio.com/${storage}.json?auth=${token}&id=${id}`);
  }
  get(storage: string) {
    const token = this.authService.getToken();
    return this.http.get(`https://knowledge-33ee3.firebaseio.com/${storage}.json?auth=${token}`);
  }
  post(storage: string, object: any) {
    const token = this.authService.getToken();
    return this.http.post(`https://knowledge-33ee3.firebaseio.com/${storage}.json?auth=${token}`, object);
  }
  put(storage: string, object: any) {
    const token = this.authService.getToken();
    return this.http.put(`https://knowledge-33ee3.firebaseio.com/${storage}.json?auth=${token}`, object);
  }
  delete(storage: string, id: number) {
    return this.http.delete(`https://knowledge-33ee3.firebaseio.com/${storage}.json/${id.toString()}`);
  }
}
