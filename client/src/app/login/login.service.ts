import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map'
import { LoginDetails } from './login.model'
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Router} from '@angular/router';
import { URLConstant } from '../util/constant';
import { Observable } from 'rxjs/Observable';
import { ServerResponseModel } from '../util/server.response.model';


@Injectable()
export class LoginService {
  private response : object;
  constructor(private $http : HttpClient,private $router : Router,private $urlConst : URLConstant){
  }

  isValidUser(loginDetails : LoginDetails) : Observable<ServerResponseModel> {
	  var data = {"userName" : loginDetails.username , "password" : loginDetails.password , "role" : 1};
	  let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    return this.$http.post<ServerResponseModel>(this.$urlConst.generateURL(this.$urlConst._LOGIN_AUTH),JSON.stringify(data),
    {headers : headers}).map(res => res);
  }
}
