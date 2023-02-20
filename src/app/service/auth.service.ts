import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }
  url=' http://localhost:3000/user';
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
  updateData(code:any,inputData:any)
  {
    return this.http.post(this.url+'/'+code,inputData);
  }
  islogged()
  {
    return sessionStorage.getItem('username')!=null;
  }
  setLogin(name:any)
  {
    sessionStorage.setItem('username',name);
  }
}
