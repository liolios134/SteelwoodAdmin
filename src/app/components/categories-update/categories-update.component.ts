import { Component, OnInit } from '@angular/core';
import { ICategory } from 'src/app/interfaces/ICategory';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { IResponse } from 'src/app/interfaces/IResponse';

@Component({
  selector: 'app-categories-update',
  templateUrl: './categories-update.component.html',
  styleUrls: ['./categories-update.component.scss']
})
export class CategoriesUpdateComponent implements OnInit {

  public category: Partial<ICategory> = {};

  constructor(
    private http:HttpClient,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params =>{
      this.initCategory(params.categoryId);
    });
  }

  public initCategory(id: string) {
    this.http.get<IResponse>(environment.apiUrl + "/categories/" + id)
    .subscribe(response => {
      this.category = response.category;
    });
  }
  public saveCategory() {
    this.http.put(environment.apiUrl + "/categories/" + this.category._id, this.category)
    .subscribe(response => {
      this.router.navigate(["/categories"]);
    });
  }

}
