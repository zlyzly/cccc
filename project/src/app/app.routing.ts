import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { AppComponent } from './app.component';
import { PrimengComponent } from './primeng/primeng.component';
import { HomeComponent } from './home/home.component';
import { ToolbatComponent } from './toolbat/toolbat.component';
import { BaToolBar } from './baToolBar/baToolBar.component';
import { CestComponent } from './cest/cest.component';
import { ScrollComponent } from './scroll/scroll.component';
import { DragmoveComponent } from './dragmove/dragmove.component';
const routes: Routes = [
    {
        path: '',
        component: AppComponent,
        children: [
            { path: 'home', component: HomeComponent },
            { path: 'prime', component: PrimengComponent },
            { path: 'scroll', component: ScrollComponent },
            { path: 'toolbar', component: BaToolBar },
            { path: 'linstenner', component: CestComponent },
            { path: 'dragmove', component: DragmoveComponent },
        ],
    },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: true });