import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { UserService } from 'app/user.service';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {


    ngOnInit(): void {
       
    }

    constructor(private formBuilder: FormBuilder , public userService:UserService) {}
public errormsg:any;
    send(){
        if (this.form.valid){
            console.log(this.form.value);
            this.userService.postCongi(this.form.value).subscribe((res)=>{
                console.log(res,"res");
            })
    }else
        this.errormsg='all field is required';
       
    }
form=new FormGroup({
'UserName':new FormControl('',Validators.required),
'email':new FormControl('',Validators.required),
'message':new FormControl('',Validators.required)
})
   
}
