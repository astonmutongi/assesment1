import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Select } from '../models/select';
import { User } from '../models/user';
import { CustomValidators } from '../shared/custom-validators';
import { UserService } from '../shared/user-service.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  @Input() user: User = new User();
  public roleSelect: Select [] = [{Id:0, DisplayValue: "Please select.."}, {Id:1, DisplayValue: "Admin"}, {Id:2, DisplayValue: "General"}];
  public clientSelect: Select [] = [{Id:0, DisplayValue: "Please select.."}, {Id:1, DisplayValue: "Client One"}, {Id:2, DisplayValue: "Client two"}];
  public statusSelect: Select [] = [  {Id:1, DisplayValue: "Active"}, {Id:2, DisplayValue: "Disabled"}];
  public isEditMode: boolean = true;
  public selected: number = 0;
  constructor(private _Activatedroute: ActivatedRoute, private userService: UserService, private router: Router) { }  

  ngOnInit(): void {
    var id = this._Activatedroute.snapshot.params["id"];
    if(id){
      this.userService.getSingle(id).subscribe((response) =>{
        if(response.body) {
          var user = response.body;
          this.user.Client = user.client; 
          this.user.FirstName = user.firstName; 
          this.user.LastName = user.lastName; 
          this.user.EmailAddress = user.emailAddress; 
          this.user.Password = user.password; 
          this.user.Status = user.status; 
          this.user.UserRole = user.userRole; 
          this.user.MobileCode = user.mobileCode; 
          this.user.Mobile = user.mobile; 
          this.isEditMode = false;
        }
      }
      
      )
    }
  } 

  delete(){
    this.userService.delete(this.user).subscribe((u) => {
      this.isEditMode = false;
    } );      
  }
  save(){   
      var invalid = document.querySelectorAll('.ng-invalid');
      if(invalid.length == 0){
        this.userService.save(this.user).subscribe((u) => {
          this.isEditMode = false;
        } ); 
      }           
  }

  edit(){
    this.isEditMode = true;
  }

  cancel(){
    this.router.navigate(['../user-list']);;
  }  

}
