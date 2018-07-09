import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import {ConfigService} from '../shared/config.service';

@Injectable({
  providedIn: 'root'
})
export class InvestmentCategoriesService {

  private investmentServiceClient: any;

  constructor(
    private httpClient: HttpClient,
    private configService: ConfigService
  ) {
    this.investmentServiceClient = this.configService.config ? this.configService.config.investmentServiceClient : null;
  }

  loadInvestmentCategories(): Observable<any[]> {
    return this.httpClient
      .get(`${this.investmentServiceClient.apiUrl}/invest-categories`)
      .pipe(
        map((res: any) => {
          return res.categories ? res.categories : [];
        })
      );
  }
}
