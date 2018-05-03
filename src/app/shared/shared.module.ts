import { HttpClientModule } from '@angular/common/http';
import { SharedService } from './shared.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FlexLayoutModule
  ],
  declarations: [],
  exports: [
    CommonModule,
    FlexLayoutModule
  ]
  ,
  providers: [
    SharedService
  ]
})
export class SharedModule { }
