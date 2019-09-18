import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main/main.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import { SheetComponent } from './sheet/sheet.component';
import {MatMenuModule} from '@angular/material/menu'
import {MatChipsModule} from '@angular/material/chips';
import {NgxPaginationModule} from 'ngx-pagination';
@NgModule({
  declarations: [MainComponent, SheetComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MainRoutingModule,
    MatTableModule,
    MatSortModule,
    MatSlideToggleModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatMenuModule,
    MatChipsModule,
    NgxPaginationModule
  ],
  entryComponents : [SheetComponent]
})
export class MainModule { }
