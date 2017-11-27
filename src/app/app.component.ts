import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public braggers: Array<Bragger> = [];

  shae: Bragger = { name: "Shae" };
  amy: Bragger = { name: "Amy" };
  paula: Bragger = { name: "Paula" };

  constructor() {
    this.braggers.push(this.shae);
    this.braggers.push(this.amy);
    this.braggers.push(this.paula);
  }

}



interface Bragger {
  name: string;
  title?: Object;
}


