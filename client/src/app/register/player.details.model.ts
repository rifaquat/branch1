import { KeyValueModel } from "./key.value.model";

export class PlayerDetails{
  private playerId :string;
  private id :string;
  private firstName :string;
  private lastName :string;
  private gender : string;
  private address : string;
  private mobileNumber : string;
  private imeiNumber : string;
  private trait =new  KeyValueModel();
  private specialty = new  KeyValueModel();
  private club = new KeyValueModel();
  private dateOfBirth : string;

  constructor(){}
}
