import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { UserCreationComponent } from './user-creation/user-creation.component';
import { UserEditionComponent } from './user-edition/user-edition.component';
import { ChatComponent } from './chat/chat.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { PruebasComponent } from './pruebas/pruebas.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    UserCreationComponent,
    UserEditionComponent,
    ChatComponent,
    PruebasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
