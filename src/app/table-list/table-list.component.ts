import { Component, OnInit } from '@angular/core';
import { Users } from 'app/model/users';
import { UserService } from 'app/user.service';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {

  constructor(private userlist:UserService) { }

public a : any;
  ngOnInit() {
   
    this.userlist.getAllEmployes().subscribe((res)=>{
      console.log(res);
      this.a=res.data;
    });
  }

}
