import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {ClubModel} from "./club.model";
import {URLConstant} from "../util/constant";
import {ServerResponseModel} from "./server.response.model";
import {SpecialtyModel} from "./specialty.model";
import {ResponseIntf} from "../interface/response";
import { TraitModel } from "./trait.model";

@Injectable()
export class UtilService {
  _urlConst = new URLConstant();
  _http: HttpClient;

  constructor(private $http: HttpClient) {
    this._http = $http;
  }

  fetchClub(): Observable<ClubModel[]> {
    return this._http.get<ServerResponseModel>(this._urlConst.generateURL(this._urlConst._CLUB_URL))
      .map(response => response.result);
  }

  fetchSpecialty(): Observable<SpecialtyModel[]> {
    return this._http.get<ServerResponseModel>(this._urlConst.generateURL(this._urlConst._SPECIALTY_URL))
      .map(response => response.result);
  }

  fetchTrait(): Observable<TraitModel[]> {
    return this._http.get<ServerResponseModel>(this._urlConst.generateURL(this._urlConst._TRAIT_URL))
      .map(response => response.result);
  }
  
}
