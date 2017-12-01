import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
    selector: 'timeline',
    templateUrl: 'timeline.html',
    styleUrls: ['timeline.css']
})

export class Timeline {

    yAxis: string[] = ['a', 'b', 'c', 'd', 'e', 'f'];
    xAxis: Array<{data: number[], label: string}> = [{
            data: [5, 3, -5, 1, 0, 3],
            label: '' // may need to remove this
        }];
    chartType: string = 'line';
    chartOptions: any = {
        legend: {
            display: false,
        },
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

    constructor(private router: Router) { }

    goHome() {
        this.router.navigateByUrl('../home');
    }
}
