import { Component } from '@angular/core';
import {AuthService} from "./service/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-site';
  show=false;
  constructor(private service:AuthService,private route:Router){
    this.route.navigate(['home']);
  }
  loggedin=this.service.islogged();
}

