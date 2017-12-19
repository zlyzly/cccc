import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { PrimengComponent } from './primeng/primeng.component';
import { HomeComponent } from './home/home.component';
import { Route, Router, ActivatedRoute, Params } from '@angular/router';
// 引入路由
import { routing } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    PrimengComponent,
    HomeComponent
  ],
  imports: [
    RouterModule,
    BrowserModule,
    routing,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
