import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {catchError} from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user:any={};
  nameUser = ""
  chats:any = []
  allChats:any = []
  value = 0
  channel :any={}
  newChannel :any={}

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

  getChat(idChannel:any){
    console.log(idChannel)

    this.findChat(idChannel).subscribe(
      (respuesta:any) => this.formatChatOne(respuesta)
    )
  }

  findChat(idChannel:any){
    var httpOptions={
      headers:new HttpHeaders({
        'Content-Type':'application/json'

      })
    }
    return this.http.get<any>("http://localhost:4042/chat/findOne/" + idChannel, httpOptions).pipe(
      catchError(e=>"Error al realizar el el /findOne")
    )
  }

  formatChatOne(res:any){
    localStorage.setItem("chat",JSON.stringify(res))
    location.href="/pruebas"
  }

  formatChat(res:any){
    this.chats = JSON.stringify(res)
    this.chats = JSON.parse(this.chats)
    console.log("RESPUESTA DE CHATS")
    console.log(this.chats)
  }

  findChats(){
    var httpOptions={
      headers:new HttpHeaders({
        'Content-Type':'application/json'
      })
    }
    return this.http.get<any>("http://localhost:4042/chat/find/" + this.user[0].idclient, httpOptions).pipe(
      catchError(e=>"Error al realizar el el find")
    )
  }

  formulariochannel(){
    let validForm : any = document.getElementById("channelForm");
    if(validForm.reportValidity()){
      this.createService().subscribe(
        (response:any)=>this.confirmCreation(response)
      )
    }
  }

  createService(){
    var httpOptions={
      headers:new HttpHeaders({
        'Content-Type':'application/json'
      })
    }

  let prueba = {"name":this.channel.name, "description":this.channel.description, "user":this.user[0].user, "userIdclient":this.user[0].idclient}
    console.log(prueba)

  console.log(prueba)
    return this.http.post<any>("http://localhost:4042/chat/add", prueba, httpOptions).pipe(
       catchError(e=>"e")
    )
  }

  confirmCreation(res:any){
    console.log(res)
    if(res=="e"){
      console.log("Error peticion");
    }else{
    this.channel = {};
    alert("Su canal a sido agregado: "+res.name)
      localStorage.setItem("chat", JSON.stringify(res))
      location.href="/home"
    }
  }
}
