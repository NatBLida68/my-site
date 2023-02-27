import { Component } from '@angular/core';
import {AuthService} from "../service/auth.service";
import {Router} from '@angular/router';
import {FormBuilder, Validators} from "@angular/forms";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css'],
  exportAs:'userList'    //user defined - now can used this child component methods in parent
})
export class ListUserComponent {
  public constructor(private service:AuthService,private route:Router,private builder:FormBuilder,private toaster:ToastrService){
  this.listUser();
  }
   users:any;
  usertype=this.service.isAdmin();
  selected:any;
  listUser()
  {
   this.service.getAll().subscribe((res: any) => {
     return  this.users = res;
    });

  }

    displayStyle = "none";
    bg='black';

    openPopup(id:any) {
        this.displayStyle = "block";
        this.service.getById(id).subscribe(res=>{
            return this.selected= res;
        });
        console.log(this.selected);
    }
    closePopup() {
        this.displayStyle = "none";
    }


    updateForm=this.builder.group({
        name:this.builder.control(''),
        email:this.builder.control(''),
    });

    updateUser()
    {
        if(this.updateForm.valid)
        {
            let obj:any =this.updateForm.value;
            Object.keys(obj).forEach(key => {
                if (obj[key] === '') {
                    delete obj[key];
                }
            });

            this.service.updateData(this.selected[0].id,obj).subscribe(res =>{
                this.toaster.success("success");
            });
            this.closePopup();
            this.route.navigate(['home']);
        }
        else{
            this.toaster.warning("Please enter the valid data!");

            this.closePopup();
            this.route.navigate(['home']);
        }


    }
}
