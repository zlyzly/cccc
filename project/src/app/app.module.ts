import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { PrimengComponent } from './primeng/primeng.component';
import { HomeComponent } from './home/home.component';
import { Route, Router, ActivatedRoute, Params } from '@angular/router';
// 引入路由
import { routing } from './app.routing';
import { ToolbatComponent } from './toolbat/toolbat.component';
import { BaToolBar } from './baToolBar/baToolBar.component';
import { BaToolbarDataService } from './baToolBar/baToolBar.service';
@NgModule({
  declarations: [
    AppComponent,
    PrimengComponent,
    HomeComponent,
    ToolbatComponent,
    BaToolBar,
  ],
  imports: [
    RouterModule,
    BrowserModule,
    routing,
  ],
  providers: [BaToolbarDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
