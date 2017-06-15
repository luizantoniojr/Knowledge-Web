import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { AuthService } from "app/services/auth.service";
import { environment } from "environments/environment";

@Injectable()
export class DataStorageService {
  url:string = environment.urlFirebase;
  constructor(private http: Http, private authService: AuthService) { }

  getById(storage: string, id: string) {
    const token = this.authService.getToken();
    //ToDo: implementar um get por id aqui.
    return this.http.get(`${this.url}/${storage}.json?auth=${token}&id=${id}`);
  }
  get(storage: string) {
    const token = this.authService.getToken();
    return this.http.get(`${this.url}/${storage}.json?auth=${token}`);
  }
  post(storage: string, object: any) {
    const token = this.authService.getToken();
    return this.http.post(`${this.url}/${storage}.json?auth=${token}`, object);
  }
  put(storage: string, object: any) {
    const token = this.authService.getToken();
    return this.http.put(`${this.url}/${storage}.json?auth=${token}`, object);
  }
  delete(storage: string, id: number) {
    return this.http.delete(`${this.url}/${storage}.json/${id.toString()}`);
  }
}
