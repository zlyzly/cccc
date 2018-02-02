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
import { CestComponent } from './cest/cest.component';
import { ScrollComponent } from './scroll/scroll.component';
import { BaToolBar } from './baToolBar/baToolBar.component';
import { BaToolbarDataService } from './baToolBar/baToolBar.service';
import { DataTableModule, SharedModule, TreeModule, TreeNode } from 'primeng/primeng';
import { CarService } from './primeng/carService';
import { TransferenceService } from './home/home.service';
import { Utils } from './scroll/util';
@NgModule({
  declarations: [
    AppComponent,
    PrimengComponent,
    HomeComponent,
    ToolbatComponent,
    BaToolBar,
    CestComponent,
    ScrollComponent,
  ],
  imports: [
    RouterModule,
    BrowserModule,
    routing,
    // DataTableModule,
    // SharedModule,
    // TreeModule,
  ],
  // CarService, TreeDragDropService
  providers: [BaToolbarDataService, CarService, TransferenceService,Utils],
  bootstrap: [AppComponent]
})
export class AppModule { }
