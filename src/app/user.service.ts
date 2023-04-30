import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


import {Observable, Subject} from 'rxjs';
import {Users} from "./model/users";

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': '*',
        'Access-Control-Allow-Headers': 'Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token'
    })
};
@Injectable({
    providedIn: 'root'
})
export class UserService {
    public host = 'http://localhost:3000';
   

    constructor(private _http: HttpClient) {
    }

    getAllUsers(): Observable<any> {
        return this._http.get<any>(this.host+'/employes');
    }
    getAllEmployes(): Observable<any> {
        return this._http.get<any>(this.host+'/user');
    }
    /*addUsers(user:User){
        return this._http.post(this.host+'/Register',user);
    }*/
    postCongi(data:any):Observable<any>{
        console.log(data , "createdData");
      return this._http.post(this.host+'/freetime',data);

    }
    updateUser(user:Users){
        return this._http.put(this.host+'/update',user);
    }
    deleteUser(user:Users){
        return this._http.delete<Users>(this.host+'/deleteUser?id='+user.Id);

    }

    private  _listners = new Subject<any>();
    listen(): Observable<any>{
        return this._listners.asObservable();
    }
    filter(filterBy : string){
        this._listners.next(filterBy);
    }
userLogin(){
    
}


}
