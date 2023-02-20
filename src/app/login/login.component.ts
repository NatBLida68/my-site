import { Component } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {ToastrService} from "ngx-toastr";
import {AuthService} from "../service/auth.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  name="Stranger";  //two way binding eg (FormsModule should be in module.ts to used ngModel)
  constructor(private builder:FormBuilder,private toaster:ToastrService,private service:AuthService, private route:Router)
  {
    sessionStorage.clear();
  }
  loginForm=this.builder.group({
    /*id:this.builder.control('',Validators.compose([Validators.required,Validators.minLength(3)])),*/
    name:this.builder.control('',Validators.required),
    password:this.builder.control('',Validators.required),
  });

  verifyLog()
  {
      if(this.loginForm.valid)
      {

        this.service.getByCode(this.loginForm.value.name,this.loginForm.value.password).subscribe(res =>{
          this.toaster.success("success");
          this.service.setLogin(this.loginForm.value.name);
          this.route.navigateByUrl('home');
        });
      }
      else{
        this.toaster.warning("Please enter the valid data!");
        this.route.navigate(['home']);
      }
    }
  }

