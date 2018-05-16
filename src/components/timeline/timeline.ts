import { Chart } from 'chart.js';
import { Router } from '@angular/router';
import { Component, Input } from '@angular/core';
import { BraggerService } from './../../services/bragger.service';
import { Bragger } from './../home/home';

@Component({
    selector: 'app-timeline',
    templateUrl: 'timeline.html',
    styleUrls: ['timeline.css']
})

export class TimelineComponent {

    // variables
    bragger: Bragger;

    chartType: string = 'line';

    chartOptions: any = {
        scales: {
            yAxes: [{
                gridLines: {
                    display: true
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
                    fontColor: '#63666A',
                    fontSize: 16,
                    // callback only uses the year substring of the xAxis values
                    callback: function (xAxisValue) { return xAxisValue.substring(0, 4); }
                }
            }],
        },
        legend: {
            display: true,
            labels: {
                boxWidth: 0
            }
        },
        tooltips: {
            backgroundColor: '#63666A',
            callbacks: {
                title: function (tooltipItems, data) {
                    return data.labels[tooltipItems[0].index];
                },
                label: function (tooltipItem, data) {
                    // empty label
                }
            },
            titleFontStyle: 'lighter',
            titlecornerRadiusSpacing: 0,
            titleMarginBottom: 0
        }
    };

    xAxis: string[] = [];

    yAxis: any[] = [{
        label: '',
        data: []
    }];

    chartColors: any[] = [{
            borderColor: '#005EB8',
            backgroundColor: 'rgba(0, 94, 184, 0.5)',
            pointRadius: 5,
            pointHoverRadius: 6,
            pointBackgroundColor: '#005EB8',
            pointBorderColor: 'white',
            pointBorderWidth: 1,
            pointHoverBackgroundColor: '#00B5E2',
            pointHoverBorderColor: 'white',
            borderWidth: 3,
            defaultFontSize: 22
    }];

    constructor(public braggerService: BraggerService, private router: Router) {
        // set chart data for bragger
        this.bragger = this.braggerService.braggerServiceData;
        this.xAxis = this.bragger.brag;
        this.yAxis[0].data = this.bragger.bragValue;

        // console.log(Chart.defaults);

        // sets tooltip font-size
        Chart.defaults.global.defaultFontSize = 22;

    }

    get data() {
        return this.braggerService.braggerServiceData;
    }

    goHome() {
        this.router.navigateByUrl('../home');
    }

    traverseTimeline(keyPressed) {
        if (keyPressed === 'ArrowRight') {
            console.log('right');
        } else if (keyPressed === 'ArrowLeft') {
            console.log('left');
        }
    }
}
