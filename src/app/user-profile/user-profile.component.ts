import { Component, OnInit } from '@angular/core';
import{FormControl, FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
userForm=new FormGroup({
  'Company':new FormControl('',Validators.required),
  'email' :new FormControl('',Validators.required),
  'Username':new FormControl('',Validators.required),
  'FirstName':new FormControl('',Validators.required),
  'LastName':new FormControl('',Validators.required),
  'Adress':new FormControl('',Validators.required),
  'city':new FormControl('',Validators.required),
  'Country':new FormControl('',Validators.required),
  'postalCode':new FormControl('',Validators.required)
});
userSubmit(){
console.log(this.userForm.value);
}
}
