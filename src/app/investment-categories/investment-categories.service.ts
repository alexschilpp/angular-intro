import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import {ConfigService} from '../shared/config.service';

@Injectable({
  providedIn: 'root'
})
export class InvestmentCategoriesService {

  constructor(
    private httpClient: HttpClient,
    private configService: ConfigService
  ) { }

  loadInvestmentCategories(): Observable<any[]> {
    console.log(this.configService.config);
    return this.httpClient
      .get('https://investment-service-rest-api-dev.k8.akelius.com/api/invest-categories')
      .pipe(
        map((res: any) => {
          return res.categories ? res.categories : [];
        })
      );
  }
}
