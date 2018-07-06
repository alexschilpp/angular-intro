import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InvestmentCategoriesService {

  constructor(private httpClient: HttpClient) { }

  loadInvestmentCategories(): Observable<any[]> {
    return this.httpClient
      .get('https://investment-service-rest-api-dev.k8.akelius.com/api/invest-categories')
      .pipe(
        map((res: any) => {
          return res.categories ? res.categories : [];
        })
      );
  }
}
