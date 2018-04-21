import {Component, Input, OnInit} from '@angular/core';
import {PlayerDetails} from "./player.details.model";
import {UtilService} from "../util/util.service";
import {ClubModel} from "../util/club.model";
import {Observable} from "rxjs/Observable";
import {SpecialtyModel} from "../util/specialty.model";
import {PlayerService} from "./player.service";
import {ServerResponseModel} from "../util/server.response.model";
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { FormBuilder,Validators,FormGroup } from '@angular/forms';
import { TraitModel } from '../util/trait.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  @Input() playerDetails = new PlayerDetails();
  clubList = new Array<ClubModel>();
  specialtyList = new Array<SpecialtyModel>();
  traitList = new Array<TraitModel>();
  _selectedPlayer = null;
  registerPlayerForm : FormGroup;
  
  constructor(private $utilService: UtilService,
              private $registerService: PlayerService,
              private $activatedRouter : ActivatedRoute,
              private $router : Router,
              private $formBulder : FormBuilder) {
    this.validateForm();
    this._selectedPlayer = $activatedRouter.snapshot.params['id'];
  }

  ngOnInit() {
    console.log("Fetching clubs");
    this.$utilService.fetchSpecialty().forEach(value => {
      for (var i = 0; i < value.length; i++) this.specialtyList.push(value[i])
    });

    this.$utilService.fetchClub().forEach(value => {
      for (var i = 0; i < value.length; i++) this.clubList.push(value[i])
    });

    this.$utilService.fetchTrait().forEach(value => {
      for (var i = 0; i < value.length; i++) this.traitList.push(value[i])
    });

    if(this._selectedPlayer != null){
      this.$registerService.getPlayerDetailsById(this._selectedPlayer).forEach(value => 
        {
          console.log(value);
          this.playerDetails = value
        }    
      );
    }
  }

  validateForm(){
    this.registerPlayerForm = this.$formBulder.group({
      name : ['', Validators.required]
    });
  }

  register(){
    console.log(JSON.stringify(this.playerDetails));

    if(this._selectedPlayer == null ){
      this.$registerService.savePlayer(this.playerDetails).forEach(res => {
        if(res.code == 200){
          this.$router.navigateByUrl("/playerdetails");
        }
      });
      return;
    }
    console.log("updating details");
    this.$registerService.updatePlayer(this.playerDetails).forEach(res => {
      if(res.code == 200){
        this.$router.navigateByUrl("/playerdetails");
      }
    });
  }

  cancel(){
    this.$router.navigateByUrl("/playerdetails");
  }

  fetchClubs() {

  }

}
