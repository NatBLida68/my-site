import { Component } from '@angular/core';
import * as $ from 'jquery'; //import jquery
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  pageName = "HOME PAGE";
  public ngOnInit() //init function after angular loads auto-invoke
  {

  }

}
