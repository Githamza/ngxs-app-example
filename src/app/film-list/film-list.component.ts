import { FilmCard } from './../models/filmCard';
import { Observable } from 'rxjs/Rx';
import { AddFavoris } from './../store/favoris.actions';
import { SharedService } from './../shared/shared.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Store, Select, State } from '@ngxs/store';
import { FavorisState } from './../store/favoris.state';

@Component({
  selector: 'app-film-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.scss']
})
export class FilmListComponent implements OnInit {
  subscription: Subscription;
  dataResult: any[] = [];
  favorisfilms: FilmCard[];
  @Select(FavorisState.getFavoris) favoris$: Observable<FilmCard[]>;

  constructor(private sharedService: SharedService, private store: Store) {
    this.subscription = this.sharedService.getValue()
      .subscribe(message => {
        this.sharedService.getList(message)
          .subscribe(data => {
            this.dataResult = data;
          });
      });
  }

  ngOnInit() {
    this.favoris$.subscribe(data => {
      console.log("data from obs", data);
      this.favorisfilms = data;
    });

  }
  addTutorial(film) {
    console.log(film);
    this.store.dispatch(new AddFavoris(film));
    console.log("fav film", this.favorisfilms);
  }
  favorisCheck(film) {

    if (this.favorisfilms) {
      const result = this.favorisfilms.filter(el => {
        return el.id === film.id;
      });
      console.log('filter result', result);
      if (result.length > 0) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
}
