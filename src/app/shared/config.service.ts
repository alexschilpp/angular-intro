import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  set config(value: any) {
    this._config = value;
  }

  get config(): any {
    return this._config;
  }

  private _config: any;

  constructor(private http: HttpClient) {}

  init(): Promise<void> {
    return this.http
      .get('config.json')
      .toPromise()
      .then((config) => {
        this.config = config;
      })
      .catch(error => {
        console.error('Error initializing config', error);
      });
  }
}
