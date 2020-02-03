import { Component, OnInit } from '@angular/core';
import { LocalStorageService, LocalStorage } from 'ngx-webstorage';
import { Router } from '@angular/router';
import { IUsers } from 'src/app/interfaces/IUsers';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {


  @LocalStorage("user")
  public user: IUsers;

  constructor(
    private ls: LocalStorageService,
    private router: Router
  ) { }

  ngOnInit() {
  }
  public logout(){
    this.ls.clear("token");
    this.ls.clear("user");
    this.router.navigate(["/login"]);
  }
}
