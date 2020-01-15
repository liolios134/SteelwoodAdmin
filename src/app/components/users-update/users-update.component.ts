import { Component, OnInit } from '@angular/core';
import { IUsers } from 'src/app/interfaces/IUsers';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-users-update',
  templateUrl: './users-update.component.html',
  styleUrls: ['./users-update.component.scss']
})
export class UsersUpdateComponent implements OnInit {

  public user: Partial<IUsers> = {};

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    
    this.route.params.subscribe(params => {
      this.initUser(params.userId);
    });

  }

  public initUser(id: string) {
    this.http.get<IUsers>(environment.apiUrl + "/users/" + id)
    .subscribe(response => {
      this.user = response;
    });
  }

  public saveUser() {
    this.http.post(environment.apiUrl + "/users", this.user)
    .subscribe(response => {
      this.router.navigate(["/users"]);
    });
  }
}
