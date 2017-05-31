import { Injectable } from '@angular/core';
import { DataStorageService } from "app/services/data-storage.service";

@Injectable()
export class ProfileService {

  constructor(private dataStorageService: DataStorageService) { }

  getById(id: string) {
    return this.dataStorageService.getById('profile', id)
      .map(response => response.json())
      .catch(this.handleError);
  }
  create(object: any) {
    return this.dataStorageService.post('profile', object)
      .map(response => response.json())
      .catch(this.handleError);
  }
  update(object: any) {
    return this.dataStorageService.put('profile', object)
      .map(response => response.json())
      .catch(this.handleError);
  }
  delete(id: number) {
    return this.dataStorageService.delete('profile', id)
      .map(response => response.json())
      .catch(this.handleError);
  }
  private handleError(error: any) {
    return Promise.reject(error);
  }
}
