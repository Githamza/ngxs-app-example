import { SharedService } from './../shared/shared.service';
import { RechercheService } from './recherche.service';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-recherche',
  templateUrl: './recherche.component.html',
  styleUrls: ['./recherche.component.scss']
})
export class RechercheComponent implements OnInit {
  data;
  myControl = new FormControl();
  constructor(private sharedService: SharedService) { }

  ngOnInit() {
    this.myControl.valueChanges.subscribe(data => this.sharedService.setvalue(data));
  }
  change(event) {
    console.log(event);
  }

}
