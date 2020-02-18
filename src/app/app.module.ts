import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


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
import { LoginComponent } from './components/login/login.component';
import { AdminLayoutComponent } from './components/admin-layout/admin-layout.component';
import {NgxWebstorageModule} from 'ngx-webstorage';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { AuthGuard } from './guards/auth.guard';
import { ChartModule } from 'angular2-chartjs';
import { DropzoneModule, DROPZONE_CONFIG, DropzoneConfigInterface } from 'ngx-dropzone-wrapper';
import { environment } from 'src/environments/environment';
import { ServiceWorkerModule } from '@angular/service-worker';

const DEFAULT_DROPZONE_CONFIG: DropzoneConfigInterface = {
  url: environment.apiUrl + '/upload',
  maxFilesize: 20,
  acceptedFiles: 'image/*',
  paramName: 'file'
};


const routes= [
  {
    path:"",
    component: AdminLayoutComponent,
    canActivate: [AuthGuard],
    children:[
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
    ]
  },
  {
    path:"login",
    component: LoginComponent
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
    CategoriesUpdateComponent,
    LoginComponent,
    AdminLayoutComponent

  ],
  imports: [    
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    NgbModule.forRoot(),
    EditorModule,
    NgxWebstorageModule.forRoot(),
    ChartModule,
    DropzoneModule,
    ServiceWorkerModule.register('ngsw-worker.js', {enabled : environment.production})

  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    {
      provide: DROPZONE_CONFIG,
      useValue: DEFAULT_DROPZONE_CONFIG
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
