import { DeleteFavoris } from './../../store/favoris.actions';
import { FavorisState } from './../../store/favoris.state';
import { FilmCard } from './../../models/filmCard';
import { Component, OnInit } from '@angular/core';
import { Store, Select, State } from '@ngxs/store';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-favoris',
  templateUrl: './favoris.component.html',
  styleUrls: ['./favoris.component.scss']
})
export class FavorisComponent implements OnInit {
  favorisfilms: FilmCard[];

  @Select(FavorisState.getFavoris) favoris$: Observable<FilmCard>;
  constructor(private store: Store) { }
  deleteFavoris(film) {
    this.store.dispatch(new DeleteFavoris(film));
  }
  ngOnInit() {
  }


}
