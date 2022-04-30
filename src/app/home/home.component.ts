import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user:any={};
  nameUser = ""

  constructor() { }

  ngOnInit(): void {
    this.user = localStorage.getItem("user");
    this.user = JSON.parse(this.user);
    this.nameUser = this.user[0].user;
    
    console.log(this.user)
    console.log(this.user[0].user);
    
  }

}
