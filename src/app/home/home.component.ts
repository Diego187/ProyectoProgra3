import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {catchError} from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user:any={};
  nameUser = ""
  chats:any = {}
  allChats:any = {}
  value = 0

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.user = localStorage.getItem("user");
    this.user = JSON.parse(this.user);
    this.nameUser = this.user[0].user;

    console.log(this.user)
    console.log(this.user[0].user);

    this.findChats().subscribe(
      (respuesta:any) => this.formatChat(respuesta)
    )
  }

  /*remove(){
    console.log("REMOVE")
    console.log(this.allChats)
  }*/

  getChat(idChannel:any){
    console.log(idChannel)
    for(let chat of this.allChats){
      if(chat.idchannel == idChannel){
        localStorage.setItem("chat",JSON.stringify(chat))
        location.href="/chat"
      }
    }

  }

  formatAllChat(res:any){
    this.allChats = JSON.stringify(res)
    this.allChats = JSON.parse(this.allChats)
    console.log("RESPUESTA DE ALL CHATS")
    console.log(this.allChats)

    this.dataChat()
  }

  formatChat(res:any){
    this.chats = JSON.stringify(res)
    this.chats = JSON.parse(this.chats)
    console.log("RESPUESTA DE CHATS")
    console.log(this.chats)

    this.findAllChats().subscribe(
      (respuesta:any) => this.formatAllChat(respuesta)
    )
  }

  findAllChats(){
    var httpOptions={
      headers:new HttpHeaders({
        'Content-Type':'application/json'
      })
    }
    return this.http.get<any>("http://localhost:4042/chat/findAll", httpOptions).pipe(
      catchError(e=>"E")
    )
  }

  findChats(){
    var httpOptions={
      headers:new HttpHeaders({
        'Content-Type':'application/json'
      })
    }
    return this.http.get<any>("http://localhost:4042/chat/findIdchat/" + this.user[0].idclient, httpOptions).pipe(
      catchError(e=>"Error al realizar el el findIdChaty")
    )
  }

  dataChat(){
    console.log("Entro en data" )
    for (let chat of this.chats){
      for(let chatA of this.allChats){
        if(chat.channelIdchannel == chatA.idchannel){
          chat.name = chatA.name
          chat.description = chatA.description
        }
      }
    }
    console.log("RESPUESTA DE CHATS CON DATA")
    console.log(this.chats)
  }
}
