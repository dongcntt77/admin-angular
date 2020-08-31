import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {InputTextModule} from 'primeng/inputtext';
import {TableModule} from 'primeng/table';
import {PanelModule} from 'primeng/panel';
@NgModule({
  declarations: [],
  imports: [
    PanelModule,
    TableModule,
    InputTextModule,
    CommonModule
  ],
  exports: [
    PanelModule,
    TableModule,
    InputTextModule,
    CommonModule
  ],
})
export class SharedModule { }
