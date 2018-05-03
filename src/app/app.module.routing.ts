
import { Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';

const APP_ROUTES: Routes = [
    {
        path: '', redirectTo: '/home', pathMatch: 'full'


    },
    {
        path: 'home', loadChildren: './recherche/recherche.module#RechercheModule',
    }
];
export const appRouting: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);

