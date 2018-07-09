import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    request = request.clone({
      setHeaders: {
        Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6Ik5EZzRPRGd3TURKR05VVTJNVVJFTXpKRVFUYzFPVGs0TlVORE9UVkJRVGd3TXpCRFFUa3pNZyJ9.eyJodHRwczovL2FrZWxpdXMuY29tL2NsYWltcy91c2VyaWQiOiJhdXRoMHw1YTc4NTEyODY4NzY3NjM0Y2Y0NzA0NjQiLCJodHRwczovL2ludmVzdG1lbnQuYWtlbGl1cy5jb20vY2xhaW1zL3JvbGVzIjpbImludmVzdG1lbnRtYWtlci1ERSIsImludmVzdG1lbnRtYWtlci1GUiJdLCJodHRwczovL2FrZWxpdXMuY29tL2NsYWltcy9naXZlbl9uYW1lIjoiSmFuZSIsImh0dHBzOi8vYWtlbGl1cy5jb20vY2xhaW1zL2ZhbWlseV9uYW1lIjoiRG9lIiwiaHR0cHM6Ly9ha2VsaXVzLmNvbS9jbGFpbXMvZW1haWwiOiJhbGV4YW5kZXIuc2NoaWxwcEBha2VsaXVzLmRlIiwiaXNzIjoiaHR0cHM6Ly9ha2VsaXVzLWRldi5ldS5hdXRoMC5jb20vIiwic3ViIjoiYXV0aDB8NWE3ODUxMjg2ODc2NzYzNGNmNDcwNDY0IiwiYXVkIjpbImh0dHBzOi8vaW52ZXN0bWVudC1kZXYuYWtlbGl1cy5jb20vYXBpLyIsImh0dHBzOi8vYWtlbGl1cy1kZXYuZXUuYXV0aDAuY29tL3VzZXJpbmZvIl0sImlhdCI6MTUzMTEyNTUyNiwiZXhwIjoxNTMxMTMyNzI2LCJhenAiOiI1SzR4NGk3b1FObXhDcGhkN1JPZHVOWmN4YWZZTTc3VSIsInNjb3BlIjoib3BlbmlkIHByb2ZpbGUgZW1haWwifQ.agg1rSKr30N_yk49E55-v-0KP0HshnRGj9uNTLzajhGAAeZ1ieBNH10uwYsXRKWUlOmgZdupXR_TRbX9sOELKwmGeRAl1GapK8qdxp7cLyiA-W5NGZ-zAA09oHocypoGWAaMdLDuHaiCFuldDP4rKrYSukWdFs685KCy7FNQOis_5r3SqaxWFWcpvRZ3zMQ62RjswoEjWiSpazlRkBKriZDDeD3wAY5tb1IMG2UwuYnSyaMyQYAnKuAYfu9H_xjaESA800YGs5rUCKqlHgt55UyWkSML58z4vYl6PFkimf3bi2J2eLv6rJ3u7nRgV1W_iKbSJQ7c4b69fbnmxVB-xw`
      }
    });
    return next.handle(request);
  }
}
