import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Users} from "../interfaces/user";
import {Observable, Subject} from "rxjs";

@Injectable({providedIn: "root"})
export class HttpService {
  url: string = "https://dummyjson.com/users";
  constructor(
    private httpClient: HttpClient
  ) {
    console.log("HttpService");
  }


  get(){
   return new Promise((resolve, reject) => {
    return  this.httpClient.get<any>(this.url).subscribe(response =>{
       console.log("response", response.users);
       if(response?.users) return resolve(response.users);
       else return reject("user not found");
     });
   })
  }
}
