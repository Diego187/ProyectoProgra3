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

  getChat(name:any){
    console.log(name)
    for(let chat of this.chats){
      if(chat.name == name){
        localStorage.setItem("chat",JSON.stringify(chat))
        location.href="/chat"
      }
    }
    
  }


  formatChat(res:any){
    this.chats = JSON.stringify(res)
    this.chats = JSON.parse(this.chats)
    console.log(this.chats)
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

}
