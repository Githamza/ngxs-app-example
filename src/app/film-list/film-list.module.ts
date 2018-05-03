import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgxsModule } from '@ngxs/store';
import { FavorisState } from '../store/favoris.state';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { FilmListComponent } from './film-list.component';
import { FavorisComponent } from './favoris/favoris.component';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    MatTabsModule,
    NgxsModule.forRoot([
      FavorisState
    ]),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    //NgxsLoggerPluginModule.forRoot()
  ],
  declarations: [FilmListComponent, FavorisComponent],
  exports: [
    FilmListComponent
  ]
})
export class FilmListModule { }
