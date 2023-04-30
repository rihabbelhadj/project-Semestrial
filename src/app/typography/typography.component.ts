import { Component, OnInit } from '@angular/core';
import { UserService } from 'app/user.service';

@Component({
  selector: 'app-typography',
  templateUrl: './typography.component.html',
  styleUrls: ['./typography.component.css']
})
export class TypographyComponent implements OnInit {

  constructor(private userlist:UserService) { }

public a : any;
  ngOnInit() {
   
    this.userlist.getAllUsers().subscribe((res)=>{
      console.log(res);
      this.a=res.data;
    });
  }

}
