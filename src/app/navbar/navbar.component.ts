import { Component } from '@angular/core';
import {AuthService} from "../service/auth.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  public constructor(private service:AuthService)
  {
    this.navdata();
  }
  logged = this.service.islogged();
  navitems=this.navdata();
  show=true;
navdata()
{
  return (this.logged)?['home']:['home','register'];

}
}
