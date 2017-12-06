import { Router } from '@angular/router';
import { Component, Input } from '@angular/core';
import { BraggerService } from './../services/bragger.service';
import { Bragger } from './../home/home';

@Component({
    selector: 'timeline',
    templateUrl: 'timeline.html',
    styleUrls: ['timeline.css']
})

export class Timeline {

    // variables
    bragger: Bragger;

    chartType: string = 'line';
    chartLegend: boolean = false;
    chartOptions: any = {
        scales: {
             yAxes: [{
                 gridLines: {
                     display: false
                 },
                 ticks: {
                     fontColor: 'white'
                 }
             }],
             xAxes: [{
                 gridLines: {
                     display: false
                 },
                 ticks: {
                     fontColor: 'white'
                 }
             }],
         }
     };
    xAxis: string[] = [];
    // yAxis: any[] = [
    //     {
    //         data: [5, 3, -5, 1, 0, 3]
    //     }
    // ];
    yAxis: number[] = [];
    chartColors: any[] = [];

    constructor( public braggerService: BraggerService, private router: Router ) {
        this.bragger = this.braggerService.braggerServiceData;
        this.xAxis = this.bragger.brag;
        this.yAxis = this.bragger.bragValue;
    }

    get data() {
        return this.braggerService.braggerServiceData;
    }

    goHome() {
        this.router.navigateByUrl('../home');
    }
}
