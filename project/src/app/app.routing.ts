import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { AppComponent } from './app.component';
import { PrimengComponent } from './primeng/primeng.component';
import { HomeComponent } from './home/home.component';
import { ToolbatComponent } from './toolbat/toolbat.component';
import { BaToolBar } from './baToolBar/baToolBar.component';
const routes: Routes = [
    {
        path: '',
        component: AppComponent,
        children: [
            { path: 'primeng', component: PrimengComponent },
            { path: 'home', component: HomeComponent },
            // { path: 'home', component: HomeComponent },
            { path: 'toolbar', component: BaToolBar },
        ],
    },
];

export const routing :ModuleWithProviders = RouterModule.forRoot(routes, { useHash: true });