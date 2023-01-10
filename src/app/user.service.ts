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
    public host = 'https://localhost/../php';

    constructor(private _http: HttpClient) {
    }

    getAllUsers(): Observable<Users[]> {
        return this._http.get<Users[]>(this.host+'/getUsers');
    }
    /*addUsers(user:User){
        return this._http.post(this.host+'/Register',user);
    }*/

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



}
