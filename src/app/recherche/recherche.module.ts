import { RechercheService } from './recherche.service';
import { FilmListModule } from '../film-list/film-list.module';
import { rechercheRoutes } from './recherche-module.routing';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RechercheComponent } from './recherche.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SharedService } from '../shared/shared.service';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    MatAutocompleteModule,
    MatInputModule,
    ReactiveFormsModule,
    rechercheRoutes,
    FilmListModule,
    HttpClientModule
  ],
  declarations: [RechercheComponent],
  exports: [RechercheComponent],
  providers: [RechercheService, SharedService]


})
export class RechercheModule { }
