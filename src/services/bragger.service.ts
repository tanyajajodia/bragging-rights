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

    getSortedByNameBraggerArray() {
        this.braggers.sort(( bragger1, bragger2 ) => {

            if ( bragger1.name > bragger2.name ) {
                return 1;
            }

            if ( bragger1.name < bragger2.name ) {
                return -1;
            }

            return 0;
        });

        return this.braggers;
    }
}
