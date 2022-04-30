import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-user-creation',
  templateUrl: './user-creation.component.html',
  styleUrls: ['./user-creation.component.css']
})
export class UserCreationComponent implements OnInit {
  users:any={};
  // respuesta:String="";
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }

  consult(){
    location.href="/";
  }

  createAccount(){
    let validForm : any = document.getElementById("form");
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
    return this.http.post<any>("http://localhost:4042/user/add", this.users, httpOptions).pipe(
      catchError(e=>e)
    )
  }

  confirmCreation(res:any){
    console.log(res)
    if(res=="e"){
      console.log("Error peticion");
    }else{
    this.users = {};
    alert("El usuario fue creado exitosamente con id"+res.iduser)
    }
  }
} 
  