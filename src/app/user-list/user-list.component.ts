import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../models/user';
import { UserService } from '../shared/user-service.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  @Input() users: any[] = [];
  constructor( private userService: UserService, ) {
    this.userService.list().subscribe((response) => {
       this.users = response.body;
    })
   }

  ngOnInit(): void {
  }

}
