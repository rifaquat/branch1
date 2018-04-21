export class URLConstant{
  public _DOMAIN: string = "http://localhost:8080";
  public _VERSION : string = "/api"
  public _CLUB_URL : string = "/club/list";
  public _TRAIT_URL : string = "/trait/list";
  public _SPECIALTY_URL : string = "/specialty/list";
  public _SAVE_PLAYER : string = "/player/save";
  public _UPDATE_PLAYER : string = "/player/update";
  public _LOGIN_AUTH : string = "/user/validate";
  public _PLAYER_LIST : string = "/player/list";
  public _PLAYER_DETAILS : string = "/player/find/";

  public generateURL( path :string) : string {
      return this._DOMAIN+this._VERSION+path;
  }

}
