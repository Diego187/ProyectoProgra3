import { Component, OnInit } from '@angular/core';
import { mergeAll } from 'rxjs/operators';


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
  

  constructor() { }

  ngOnInit(): void {
    this.user = localStorage.getItem("user");
    this.user = JSON.parse(this.user);
    this.nameUser = this.user[0].user;

    this.chat = localStorage.getItem("chat")
    this.chat = JSON.parse(this.chat)
    this.cargarChats();

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



  signOff(){
    localStorage.clear()
    location.href="#"
  }
}
