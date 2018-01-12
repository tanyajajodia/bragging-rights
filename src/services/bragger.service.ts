import { Injectable } from '@angular/core';
import { Bragger } from './../components/home/home';


// service that stores/retrieves data between components
@Injectable()
export class BraggerService {

    braggerServiceData: any = require('./../data/braggersData.json');
    braggers: Array<Bragger> = this.braggerServiceData.braggers;

    constructor() {}

    getBraggerArray() {
        return this.braggers;
    }
}
