import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { DashBoardComponent } from './components/dash-board/dash-board.component';
import { ProductsComponent } from './components/products/products.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductCreateComponent } from './components/product-create/product-create.component';
import { ProductUpdateComponent } from './components/product-update/product-update.component';
import { UsersComponent } from './components/users/users.component';
import { UsersCreateComponent } from './components/users-create/users-create.component';
import { UsersUpdateComponent } from './components/users-update/users-update.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { CategoriesCreateComponent } from './components/categories-create/categories-create.component';
import { CategoriesUpdateComponent } from './components/categories-update/categories-update.component';
import { EditorModule } from '@tinymce/tinymce-angular';



const routes= [
  {
    path:"",
    component: DashBoardComponent
  },
  {
    path:"products",
    children: [
      {
        path:"",
        component: ProductsComponent
      },
      {
        path:"create",
        component: ProductCreateComponent
      },
      {
        path:"update/:productId",
        component: ProductUpdateComponent
      }
    ]
  },
  {
    path: "users",
    children: [
      {
        path: "",
        component: UsersComponent
      },
      {
        path:"create",
        component: UsersCreateComponent
      },
      {
        path:"update/:userId",
        component: UsersUpdateComponent
      }

    ]
  },
  {
    path: "categories",
    children: [
      {
        path: "",
        component: CategoriesComponent
      },
      {
        path:"create",
        component: CategoriesCreateComponent
      },
      {
        path:"update/:categoryId",
        component: CategoriesUpdateComponent
      }

    ]
  }
  
];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashBoardComponent,
    ProductsComponent,
    ProductCreateComponent,
    ProductUpdateComponent,
    UsersComponent,
    UsersCreateComponent,
    UsersUpdateComponent,
    CategoriesComponent,
    CategoriesCreateComponent,
    CategoriesUpdateComponent

  ],
  imports: [    
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    NgbModule.forRoot(),
    EditorModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
