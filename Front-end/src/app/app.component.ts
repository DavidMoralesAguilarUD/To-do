import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title: string | undefined;
  constructor(){
    this.title= '';

  }
  main(){
    this.title = ''
    return this.title
    }
}



