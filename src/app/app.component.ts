import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './models/user';
import { UserService } from './shared/user-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assesment';
  
  constructor(private userService: UserService, private router: Router,){
    this.userService.list().subscribe((response) => {
      if(response.body.length > 0){
        this.router.navigate(['user-list']);
      }else{
        this.router.navigate(['user-detail']);
      }
    })

  }
}
