import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {ApiService} from "../api.service";
import {first} from "rxjs";
import { json } from 'stream/consumers';
import { userInfo } from 'os';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  angForm: FormGroup;
  constructor(private fb: FormBuilder,private dataService: ApiService,private router:Router) {
    this.angForm = this.fb.group({
      email: ['', [Validators.required,Validators.minLength(1), Validators.email]],
      password: ['', Validators.required]
    });
  }

  ngOnInit() {
  }
  postdata(angForm1)
  {
    this.dataService.userlogin(angForm1.value.email,angForm1.value.password).subscribe((data)=>{
      console.log(data.result[0])
      localStorage.setItem('user',JSON.stringify(data.result[0]));
      var email=JSON.parse(localStorage.getItem('user.results'))
      
      var user=JSON.parse(localStorage.getItem('user'))
      var email = JSON.parse(localStorage.getItem(JSON.stringify(user.email)))
      console.log(email)
      localStorage.setItem('email',user.email);
      console.log(user.email)
      var m = user.email
      if(m== ""){
       
        this.router.navigate(['/login'])
      }
      else{
        this.router.navigate(['/dashboard'])
      }
    })

    
        
  }

  get email() { return this.angForm.get('email'); }
  get password() { return this.angForm.get('password'); }


}
