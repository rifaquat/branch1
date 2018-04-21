import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {LoginService} from "./login/login.service";
import { RegisterComponent } from './register/register.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {RouterModule} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule, HTTP_INTERCEPTORS} from "@angular/common/http";
import {UtilService} from "./util/util.service";
import {PlayerService} from "./register/player.service";
import {URLConstant} from "./util/constant";
import {PlayerDetailsComponent} from "./register/player.details.component";
import { AppHttp } from './shared/http.interceptor';
import { AuthService } from './shared/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    FooterComponent,
    PlayerDetailsComponent
  ],
  imports: [
    BrowserModule,FormsModule,HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {
        path :"login",
        component: LoginComponent
      },{
        path :"register/:id",
        component: RegisterComponent
      },{
        path :"register",
        component: RegisterComponent
      },{
        path :"playerdetails",
        component: PlayerDetailsComponent
      }
    ]),
  ],
  providers: [ 
    {
      provide : HTTP_INTERCEPTORS,
      useClass : AppHttp,
      multi : true
    },
    LoginService,
    UtilService,
    PlayerService,
    URLConstant,AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}