import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserService } from './shared/user-service.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,    
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    HttpClientModule,
    FormsModule,
    MatTooltipModule,
        ReactiveFormsModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
