import { Component, OnInit } from '@angular/core';
import { element } from 'protractor';
import { HelperService } from 'src/app/helper.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
    lists = [
        { title: 'factory', name: 'factory' },
        {
            title: 'Queue',
            name: 'queue',
        },
    ];
    constructor(private httpHelper: HelperService) {}
    ngOnInit(): void {
        //this.gettingMachineStats();
    }
    showFactory() {}
}
