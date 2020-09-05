import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {InputTextModule} from 'primeng/inputtext';
import {TableModule} from 'primeng/table';
import {PanelModule} from 'primeng/panel';
import {CalendarModule} from 'primeng/calendar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {DropdownModule} from 'primeng/dropdown';
import {FileUploadModule} from 'primeng/fileupload';
@NgModule({
  declarations: [],
  imports: [
    FormsModule,
    PanelModule,
    TableModule,
    InputTextModule,
    CommonModule,
    CalendarModule,
    DropdownModule,
    FileUploadModule,
    ReactiveFormsModule,
  ],
  exports: [
    ReactiveFormsModule,
    FormsModule,
    PanelModule,
    TableModule,
    InputTextModule,
    CommonModule,
    CalendarModule,
    DropdownModule,
    FileUploadModule   
  ],
})
export class SharedModule { }
