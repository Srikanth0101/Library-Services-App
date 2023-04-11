import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { InsertComponent } from './insert/insert.component';
import { UpdateComponent } from './update/update.component';
import { DeletebookComponent } from './deletebook/deletebook.component';
import { ViewdetailsComponent } from './viewdetails/viewdetails.component';
import { LoginComponent } from './login/login.component';

const routes:Routes=[
  
  {path:'insert', component:InsertComponent},
  {path:'update',component:UpdateComponent},
  {path:'deletebook', component:DeletebookComponent},
  {path:'viewdetails',component:ViewdetailsComponent},
  {path:'login',component:LoginComponent},
  {path:'contact',component:ContactComponent},

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
