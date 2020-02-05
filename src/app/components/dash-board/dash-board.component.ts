import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { IResponse } from 'src/app/interfaces/IResponse';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.scss']
})
export class DashBoardComponent implements OnInit {

  public type = 'line';
  public data = {};
  options = {
    responsive: true,
    maintainAspectRatio: false
  };
  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.getStats();
  }

  public getStats() { 
    this.http.get<IResponse>(environment.apiUrl + "/stats")
    .subscribe(response => {
      if(response.success) {
        this.data = response.data;
      }
    });
  }

}
