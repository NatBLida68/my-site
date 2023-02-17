import { Component } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms"; //form builder default with angular
import {ToastrService} from "ngx-toastr";
import {AuthService} from "../service/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {

  constructor(private builder:FormBuilder,private toaster:ToastrService,private service:AuthService, private route:Router)
  {
  }
  registerForm=this.builder.group({
    /*id:this.builder.control('',Validators.compose([Validators.required,Validators.minLength(3)])),*/
    name:this.builder.control('',Validators.required),
    email:this.builder.control(''),
    password:this.builder.control('',Validators.required),
  });
  startRegistration()
  {console.log(this.registerForm.valid);
    if(this.registerForm.valid)
    {

      this.service.startRegistration(this.registerForm.value).subscribe(res =>{
      this.toaster.success("success");
      this.route.navigate(['home']);
    });
    }
    else{
    this.toaster.warning("Please enter the valid data!");
      this.route.navigate(['home']);
    }
  }

}
