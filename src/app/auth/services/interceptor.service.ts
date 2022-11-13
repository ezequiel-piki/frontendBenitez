import { Injectable } from '@angular/core';
import { TokenService } from './token.service';
import { HttpRequest, HttpHandler, HttpEvent, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService {

  constructor(private tokenService: TokenService) { }

  interceptor(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let intReq = request;
    const token = this.tokenService.getToken();
    if (token != null) {
      intReq = request.clone({
        headers: request.headers.set('Authorization', 'Bearer' + token)
      });
    }
    return next.handle(intReq);
  }

}

export const interceptorProvider = [{
  provider: HTTP_INTERCEPTORS,
  useClass: InterceptorService,
  multi: true
}]
