import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';



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
  userBot = "BOT"

  messages:any = {}

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.cargarChats();
  }

  cargarChats(){
    this.user = localStorage.getItem("user");
    this.user = JSON.parse(this.user);
    this.nameUser = this.user[0].user;

    this.chat = localStorage.getItem("chat")
    this.chat = JSON.parse(this.chat)

    console.log(this.chat)
    console.log("MENSAJES")
    this.messages = this.chat[0].messageList
    console.log(this.messages)

  }

  sendSMS(){
    var date = new Date()
    var month = date.getMonth() + 1

    //var prueba2 = {name:this.channel.name, description:this.channel.description, user:this.user[0].user, userIdclient:this.user[0].idclient}


    if(this.SMS == "" || this.SMS == " "){

    }
    else{
      this.newSMS = {date: date.getDate()+"/"+month+"/"+date.getFullYear(), time: date.getHours()+":"+date.getMinutes(), userUser: this.nameUser, message: this.SMS,
      channelIdchannel:this.chat[0].idchannel, userIdclient:this.user[0].idclient}
      this.messages.push(this.newSMS)


      console.log(this.newSMS)
      console.log(this.messages)
      this.saveSMS()
      this.SMS=""
    }
  }

  saveSMS(){
    this.serviceSaveSMS().subscribe(
      (response:any)=>this.confirmSaveSMS(response)
    )
  }

  serviceSaveSMS(){
    var httpOptions={
      headers:new HttpHeaders({
        'Content-Type':'application/json'
      })
    }
    return this.http.post<any>("http://localhost:4042/message/add", this.newSMS, httpOptions).pipe(
      catchError(e=>"e")
    )
  }

  confirmSaveSMS(res:any){
    console.log(res)
    if(res=="e"){
      console.log("Error al guardar sms");
    }
  }

  signOff(){
    localStorage.clear()
    location.href="#"
  }
}
