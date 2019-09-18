import { Component } from '@angular/core';
import { MainService } from 'src/services/main.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';
  constructor(private mainServiceInstance : MainService){
  }
}
