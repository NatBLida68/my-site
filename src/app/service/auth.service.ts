import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }
  url='http://localhost:3000/user';
  getAll()
  {
  return this.http.get(this.url);
  }
  getByCode(name:any,password:any)
  {
    return this.http.get(this.url+'?name='+name+"&password="+password);
  }
  startRegistration(inputData:any)
  {
    return this.http.post(this.url,inputData);
  }
  updateData(id:any,inputData:any)
  {
    return this.http.patch(this.url+'/'+id,inputData);
  }
  islogged()
  {
    return sessionStorage.getItem('username')!=null;
  }
  isAdmin()
  {
    return sessionStorage.getItem('username')=="admin";
  }
  setLogin(name:any)
  {
    sessionStorage.setItem('username',name);
  }
  getById(id:number)
  {
    return this.http.get(this.url+'?id='+id);
  }
}
