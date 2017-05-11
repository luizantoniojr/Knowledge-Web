import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import "rxjs/Rx";

@Injectable()
export class FeedService {

  constructor(private http: Http) { }

  getBrand() {
    return this.http.get('http://localhost:3000/feeds')
      .map(res => res.json())
      .catch(this.handleError);
  }

  private handleError(error: any) {
    console.error(error);
    return Promise.reject(error);
  }
}
