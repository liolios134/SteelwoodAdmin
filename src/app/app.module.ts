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


const routes= [
  {
    path:"",
    component: DashBoardComponent
  },
  {
    path:"products",
    component: ProductsComponent
  }
];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashBoardComponent,
    ProductsComponent
  ],
  imports: [    
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
