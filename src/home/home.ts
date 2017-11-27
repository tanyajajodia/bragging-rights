import { Component } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: 'home.html',
  styleUrls: ['home.css']
})
export class Home {

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


