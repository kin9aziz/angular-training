import { Component, OnInit, OnDestroy, AfterContentInit, ChangeDetectorRef } from '@angular/core';
import { HttpService } from './services/http.service'
import {Users} from './interfaces/user';
import {error} from "@angular/compiler-cli/src/transformers/util";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy{
  title?: string = 'starter';
  users: Users[] = [];
  user: Users;

  constructor(

    private httpService: HttpService,
    private changeDetectorRef: ChangeDetectorRef
  ) {

  }
  ngOnInit() {
    this.httpService.get().then((response: Users[]) => {
      this.users = response;
    }).catch(error=> console.log("error"))


  }



  ngOnDestroy() {
    console.log("ngOnDestroy")
  }

  onViewUser(user: Users){
    this.user = user;
    console.log(user);
  }

  onClearUser(){
    this.user = null;
  }

  onDeleteUser(user: Users){
     this.users = this.users.filter(element => element.id !== user.id);
  }

  onSearch(){

  }



}
