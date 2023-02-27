import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {WelcomeComponent} from "./welcome/welcome.component";
import {HomeComponent} from "./home/home.component";
import {LoginComponent} from "./login/login.component";
import {AuthGuard} from "./auth.guard";
import {ListUserComponent} from "./list-user/list-user.component";

const routes: Routes = [
  { path: 'home',
    component: HomeComponent,canActivate:[AuthGuard]
  },
  { path: 'register',
    component: WelcomeComponent
  },
  { path: 'login',
    component: LoginComponent
  },
  { path: 'users',
    component: ListUserComponent
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      onSameUrlNavigation: 'reload',
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
