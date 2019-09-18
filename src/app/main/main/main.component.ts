
import { ElementRef, NgZone, OnInit, ViewChild, Component } from '@angular/core';
import { MainService } from 'src/services/main.service';
import { List } from '../main.interface';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { FormControl } from '@angular/forms';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material/bottom-sheet';
import { SheetComponent } from '../sheet/sheet.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  displayedColumns: string[] = ['scan_id' , 'project_name' , 'issue'];
  dataSource;
  ngOnInit(){

  }
  List:List[] = [];
  gridView:boolean  = false;
  autoRenew;
  p: number = 1;
  onChange() {
    console.log(this.autoRenew.value);
    this.gridView = (this.gridView == true) ? false : true ;
  }
  constructor(private mainService: MainService, private _bottomSheet: MatBottomSheet){
    this.autoRenew = new FormControl();
    this.mainService.getData().subscribe(results => {
      this.List = results['data'];
      this.dataSource = new MatTableDataSource(this.List);
    }, err => {
      alert('Error fetching the data!');
      return false;
    });
  }

}
