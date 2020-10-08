import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { HelperService } from '../helper.service';

@Component({
    selector: 'app-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
    tabular = [];

    constructor(
        private helperService: HelperService,
        private route: ActivatedRoute
    ) {}

    ngOnInit(): void {
        //console.log(this.tabular);
        setInterval(() => {
            this.helperService.getQueue('queue').subscribe((res) => {
                this.tabular = res;
                //console.log(this.tabular);
            });
        }, 30);
    }
    getQueue() {}
}
