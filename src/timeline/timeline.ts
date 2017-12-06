import { Router } from '@angular/router';
import { Component, Input } from '@angular/core';
import { BraggerService } from './../services/bragger.service';

@Component({
    selector: 'timeline',
    templateUrl: 'timeline.html',
    styleUrls: ['timeline.css']
})

export class Timeline {

    chartType: string = 'line';
    xAxis: string[] = ['a', 'b', 'c', 'd', 'e', 'f'];
    yAxis: any[] = [
        {
            data: [5, 3, -5, 1, 0, 3]
        }
    ];
    // yAxis: number[] = [5, 3, -5, 1, 0, 3];
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
    chartColors: any[] = [
    ];

    constructor( public braggerService: BraggerService, private router: Router ) {
    }

    get data() {
        return this.braggerService.braggerServiceData;
    }

    goHome() {
        this.router.navigateByUrl('../home');
    }
}
