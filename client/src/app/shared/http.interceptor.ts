import { HttpRequest, HttpResponse, HttpInterceptor,HttpHandler,HttpEvent } from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import { Injectable } from "@angular/core";
import 'rxjs/add/operator/do';
import { AuthService } from "./auth.service";

@Injectable()
export class AppHttp implements HttpInterceptor {
  constructor(private authService : AuthService){

  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log("Testing");
        return next.handle(request.clone({setHeaders  : {token : this.authService.getToken(),"Content-Type" :"application/json" }})).do((ev: HttpEvent<any>) => {
        if (ev instanceof HttpResponse) {
          console.log('processing response', ev);
        }
      });
  }
}