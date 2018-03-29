import { Injectable } from '@angular/core';
import { Bragger } from './../components/home/home';


// service that stores/retrieves data between components
@Injectable()
export class BraggerService {

    braggerServiceData: any = require('./../data/braggersData.json');
    braggers: Array<Bragger> = this.braggerServiceData.braggers;

    constructor() {}

    getBraggerArray(): Array<Bragger> {
        return this.braggers;
    }

    getSortedByNameBraggerArray(): Array<Bragger> {
        this.braggers.sort(( bragger1, bragger2 ) => {

            let name1 = bragger1.name.toUpperCase();
            let name2 = bragger2.name.toUpperCase();

            if ( name1 > name2 ) {
                return 1;
            }

            if ( name1 < name2 ) {
                return -1;
            }

            return 0;
        });

        return this.braggers;
    }

    preloadImages(): void {
        const imgUrl = './assets/img/';
        for (let bragger of this.braggers) {
            let img = new Image();
            if (bragger.imgName !== null) {
                img.src = imgUrl + bragger.imgName;
            }
        }
    }
}
