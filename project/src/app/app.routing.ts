import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { AppComponent } from './app.component';
import { PrimengComponent } from './primeng/primeng.component';
import { HomeComponent } from './home/home.component';
const routes: Routes = [
    {
        path: '',
        component: AppComponent,
        children: [
            { path: 'primeng', component: PrimengComponent },
            { path: 'home', component: HomeComponent },
        ],
    },
];

export const routing :ModuleWithProviders = RouterModule.forRoot(routes, { useHash: true });