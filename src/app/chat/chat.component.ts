import { Component, OnInit } from '@angular/core';
import { mergeAll } from 'rxjs/operators';
import {BehaviorSubject} from "rxjs";


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  user:any={};
  nameUser = ""
  chat : any = {}

  newMessages:any = {}
  SMS = ""
  newSMS:any={}

  messages:any = {}
  //messages = new BehaviorSubject<any>(this.chat)
  constructor() { }

  ngOnInit(): void {
    this.cargarChats();
  }

  cargarChats(){
    this.user = localStorage.getItem("user");
    this.user = JSON.parse(this.user);
    this.nameUser = this.user[0].user;

    this.chat = localStorage.getItem("chat")
    this.chat = JSON.parse(this.chat)

    console.log("MENSAJES")
    this.messages = this.chat.messageList
    console.log(this.messages)
    
  }

  sendSMS(){
    var date = new Date()
    var month = date.getMonth() + 1
    var newSMS = ""
    this.newSMS = "{date: '" + date.getDate() + "/" + month
    + "/" + date.getFullYear() + "', time: '" + date.getHours()
    + ":" + date.getMinutes() + "', user: '" + this.nameUser
    + "', message: '" + this.SMS + "'}"

    this.newMessages = this.messages

    this.newMessages.push(newSMS)


    console.log(this.newSMS)



  }



  signOff(){
    localStorage.clear()
    location.href="#"
  }
}
