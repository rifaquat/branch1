import {PlayerDetails} from "./player.details.model";
import {OnInit} from "@angular/core";
import {PlayerService} from "./player.service";
import { Component } from '@angular/core';
import {Router} from '@angular/router';
import { RequestData } from "./request.model";
import { Observable } from "rxjs/Observable";
import { ServerResponseModel } from "../util/server.response.model";

@Component({ 
  selector :"player-details",
  templateUrl : "./player.details.list.html"
})

export class PlayerDetailsComponent implements OnInit {
  private playerList= new Array<PlayerDetails>();
  private _playerService: PlayerService;
  private requestedData = new RequestData(1,1,null);
  private pages : Array<number>;
  private totalRecords : number;
  ngOnInit(): void {
    this.loadAllPlayers();
  }

  constructor($playerService: PlayerService,private $router : Router) {
    this._playerService = $playerService;
  }

  loadPlayerDetails(playerId : string){
    this.$router.navigateByUrl("/register/"+playerId);
  }
  
  newPlayer(){
    this.$router.navigateByUrl("/register");
  }

  loadAllPlayers(){
     this._playerService.getPlayerDetails(this.requestedData).forEach(res => {
      for (var i = 0; i < res.result.length; i++) this.playerList.push(res.result[i]);
      this.pages = new Array(res.result.length/2);
      //this.totalRecords = res.result.length;
    });

      /* .forEach(value.result => {
        
        for (var i = 0; i < value.length; i++) this.playerList.push(value[i]);
      }) */
  }

  pageClicked(pageNumber : number ){
      this.requestedData.pageNumber = pageNumber;
      this.loadAllPlayers();
  }
}
