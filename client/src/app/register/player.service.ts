import {Injectable, OnInit} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {ServerResponseModel} from "../util/server.response.model";
import {PlayerDetails} from "./player.details.model";
import {URLConstant} from "../util/constant";
import {ResponseIntf} from "../interface/response";
import {Response} from "@angular/http";
import { ServerResponseSingleEntity } from "../util/server.response.single.model";
import { RequestData } from "./request.model";
import { HttpParams } from "@angular/common/http";

@Injectable()
export class PlayerService implements OnInit {
  _http: HttpClient;
  _urlConst : URLConstant;

  constructor(private $http: HttpClient,private  $urlConst : URLConstant) {
    this._http = $http;
    this._urlConst = $urlConst;
  }

  ngOnInit(): void {
  }

  savePlayer(player : PlayerDetails): Observable<ServerResponseModel> {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    return this._http.post<ServerResponseModel>(this._urlConst.generateURL(this._urlConst._SAVE_PLAYER),JSON.stringify(player),{headers : headers})
      .map(response => response);
  }
  
  updatePlayer(player : PlayerDetails): Observable<ServerResponseModel> {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    return this._http.put<ServerResponseModel>(this._urlConst.generateURL(this._urlConst._UPDATE_PLAYER),JSON.stringify(player),{headers : headers})
    .map(response => response);
  }

  getPlayerDetails(requestedData : RequestData ) : Observable<ServerResponseModel>{
   /* var data = { pageNumber : requestedData.pageNumber , size : requestedData.size};
     let params = new HttpParams();
    params  = params.append('pageNumber' , requestedData.pageNumber.toString());
    params  = params.append('size' , requestedData.size.toString()); */
    return  this._http.get<ServerResponseModel>(this._urlConst.generateURL(this._urlConst._PLAYER_LIST))
       .map(response => response ); 
  }
  
  getPlayerDetailsById(playerId : string) : Observable<PlayerDetails>{
    return this._http.get<ServerResponseSingleEntity>(this._urlConst.generateURL(this._urlConst._PLAYER_DETAILS)+playerId)
      .map(response => response.result );
  }

}