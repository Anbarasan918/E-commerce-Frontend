import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { CommonService } from './common.service';

@Injectable()
export class JwtInterceptorInterceptor implements HttpInterceptor {

  constructor(private commonService : CommonService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const idToken = this.commonService.SessionJWTToken;

    if (idToken) {
        const cloned = request.clone({
            headers: request.headers.set("Authorization",
                "Bearer " + idToken)
        });

        return next.handle(cloned);
    }
    else {
        return next.handle(request);
    }
}
  }

