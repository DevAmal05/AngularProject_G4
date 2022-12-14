import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PeoplelistComponent } from './peoplelist/peoplelist.component';
import { RegisterComponent } from './register/register.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'test',component:TestComponent},
  {path:'register',component:RegisterComponent},
  {path:'peoplelist',component:PeoplelistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
