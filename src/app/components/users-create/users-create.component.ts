import { Component, OnInit } from '@angular/core';
import { IUsers } from 'src/app/interfaces/IUsers';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-users-create',
  templateUrl: './users-create.component.html',
  styleUrls: ['./users-create.component.scss']
})
export class UsersCreateComponent implements OnInit {

  public user: Partial<IUsers> = {};

  constructor(
    private router: Router,
    private http: HttpClient
    
  ) { }

  ngOnInit() {
  }


  public saveUser() {
    this.http.post(environment.apiUrl + "/users", this.user)
    .subscribe(response => {
      this.router.navigate(["/users"]);
    });
  }


}
