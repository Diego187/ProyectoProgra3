import { Component, OnInit } from '@angular/core';
import {catchError, find, mergeAll} from 'rxjs/operators';
import {BehaviorSubject} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  user:any={};
  nameUser = ""
  chat : any = {}
  messages:any = {}
  newMessages:any = {}
  SMS = ""
  newSMS:any={}
  chats:any = {}


    message = new BehaviorSubject("valor incial")
    mensaje = 'inicio de mensaje';
    constructor(private http: HttpClient) {
      this.message.subscribe(data => {
        console.log('recibiendo.... ' + data)
        this.mensaje = this.mensaje+' | '+ data

      })
  }



  ngOnInit(): void {
    this.user = localStorage.getItem("user");
    this.user = JSON.parse(this.user);
    this.nameUser = this.user[0].user;
    this.chat = localStorage.getItem("chat")
    this.chat = JSON.parse(this.chat)
    this.cargarChats();
  }

  public agregaT(texto:string):void{
    this.message.next(texto)
  }


  cargarChats(){
   this.messages = this.chat.messages
  }

  sendSMS(){
    var date = new Date()
    var month = date.getMonth() + 1
    var newSMS = "{date: '" + date.getDate() + "/" + month
    + "/" + date.getFullYear() + "', time: '" + date.getHours()
    + ":" + date.getMinutes() + "', user: '" + this.nameUser
    + "', message: '" + this.SMS + "'}"
    this.newMessages = this.messages
    this.newMessages.push(newSMS)
    console.log(this.newMessages)
  }

    findChats(){
      var httpOptions={
        headers:new HttpHeaders({
          'Content-Type':'application/json'
        })
      }
      return this.http.get<any>("http://localhost:4042/chat/find", httpOptions).pipe(
        catchError(e=>"E")
      )
    }


    formatChat(res:any){
      this.chats = JSON.stringify(res)
      this.chats = JSON.parse(this.chats)
      console.log(this.chats)
    }

    find(){
      this.findChats().subscribe(
        (response:any)=>this.formatChat(response)
      )
    }


  signOff(){
    localStorage.clear()
    location.href="#"
  }

  }
