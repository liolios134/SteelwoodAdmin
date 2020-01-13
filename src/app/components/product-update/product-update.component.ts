import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/interfaces/IProduct';
import { ICategory } from 'src/app/interfaces/ICategory';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.scss']
})
export class ProductUpdateComponent implements OnInit {
  
  
  public product: Partial<IProduct> = {};
  public categories: ICategory[] = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private http: HttpClient
    ) { }

  ngOnInit() {
    this.getCategories();

    this.route.params.subscribe(params => {
      this.initProduct(params.productId);
    });
  }

  public initProduct(id: string) {
    this.http.get<IProduct>(environment.apiUrl + "/products/" + id)
    .subscribe(response => {
      this.product = response;
    });
  }

  public saveProduct() {
    this.http.put(environment.apiUrl + "/products/" + this.product._id , this.product)
    .subscribe(response => {
      this.router.navigate(["/products"]);
    });
  }

  public getCategories() {
    this.http.get<ICategory[]>(environment.apiUrl + "/categories")
    .subscribe(response => {
      this.categories = response;
    });
  }
}
