import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { MovieComponent } from './movie/movie.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},  
  {path:"", component:LoginComponent},
   { path: "home", component: HomeComponent },
   { path: 'movie/:type/:id', component: MovieComponent },
   { path: '**', component: LoginComponent }
];

// const routes: Routes = [
//   {path:"login",component:LoginComponent},
//   {path:"user",
// loadChildren:() => import('./user/user.module').then(m => m.UserModule)}, // {path:"admin",loadChildren: 
//  () => import('./admin/admin.module').then(m => m.AdminModule)}
//];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
