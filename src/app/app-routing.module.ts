import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { UserCreationComponent } from './user-creation/user-creation.component';
import { ChatComponent } from './chat/chat.component';

const routes: Routes = [

{path:'',component:LoginComponent},  
{path:'home',component:HomeComponent},
{path:'user-creation',component:UserCreationComponent},
{path: 'chat', component:ChatComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
