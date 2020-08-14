import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ModalModule } from 'ngx-bootstrap/modal';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    CollapseModule.forRoot(),
    TooltipModule.forRoot(),
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    FormsModule,
    HttpClientModule
  ],
  exports: [
    FontAwesomeModule,
    BrowserAnimationsModule,
    CollapseModule,
    TooltipModule,
    BsDropdownModule,
    ModalModule,
    FormsModule,
    HttpClientModule
  ]
})
export class ShareModule { }
