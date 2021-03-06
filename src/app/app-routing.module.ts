import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { UserCreationComponent } from './user-creation/user-creation.component';
import { ChatComponent } from './chat/chat.component';
import { UserEditionComponent } from './user-edition/user-edition.component';
import { PruebasComponent } from './pruebas/pruebas.component';

const routes: Routes = [

{path:'',component:LoginComponent},  
{path:'home',component:HomeComponent},
{path:'user-creation',component:UserCreationComponent},
{path:'user-edition',component:UserEditionComponent},
{path: 'chat', component:ChatComponent},
{path: 'pruebas', component:PruebasComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
