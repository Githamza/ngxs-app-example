import { ModuleWithProviders } from '@angular/core';
import { RechercheComponent } from './recherche.component';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
    {
        path: '', component: RechercheComponent
    },
];
export const rechercheRoutes: ModuleWithProviders = RouterModule.forChild(routes);
