import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  user:any={};
  nameUser = ""
  chat : any = {}

  constructor() { }

  ngOnInit(): void {
    this.user = localStorage.getItem("user");
    this.user = JSON.parse(this.user);
    this.nameUser = this.user[0].user;

    this.chat = localStorage.getItem("chat")
    this.chat = JSON.parse(this.chat)

  }

  cargarChats(){
    
  }



}
