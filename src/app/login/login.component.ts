import { Component, OnInit,  } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {


  mensaje: String = "prueba";
  prueba: string = "Ingrese un nombre";
  mostrar: boolean =false;
  user: any= {};
  usuarioInvalido: boolean=false;
  
  
 constructor(private http: HttpClient) { }
    
  ngOnInit(): void {
  }

 mostrarMensaje(){
    this.mostrar = !this.mostrar;
  }  

    formulariologin(){
      
      let formularioValido : any = document.getElementById("loginForm");
      if(formularioValido.reportValidity()){
        
        this.servicioLogin().subscribe(
          (respuesta:any)=> this.login(respuesta)
        )
      }
    }
  
    login(res:any){
    
      if(res==null){
        this.usuarioInvalido=true;
      }
      else if(res=="e"){
        alert("trono")
      }
      else if(res!=null){
        localStorage.setItem("user",JSON.stringify(res));
        location.href="/home"; 
      }
 
  
  
    }
  
    servicioLogin(){
      var httpOptions={
        headers:new HttpHeaders({ 
          'Content-Type':'application/json'
        })
      }
  
      return this.http.post<any>("http://localhost:4042/login/user", this.user, httpOptions).pipe(
        catchError(e=>"e")
      )
  
    }



  

}
