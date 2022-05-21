import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {catchError, find} from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';
import {BehaviorSubject} from "rxjs";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user:any={};
  nameUser = ""

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    /*this.find()*/
    this.user = localStorage.getItem("user")
    this.user = JSON.parse(this.user)
    this.nameUser = this.user[0].user

   /* this.findChats().subscribe(
      (respuesta:any) => this.formatChat(respuesta)
    )*/
  }

/*  getChat(name:any){
    console.log(name)
    for(let chat of this.chats){
      if(chat.name == name){
        localStorage.setItem("chat",JSON.stringify(chat))
        location.href="/chat"
      }
    }
  }*/

}
