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
        this.route.params.subscribe((params: Params) => {
            this.helperService.getQueue(params.stuff).subscribe((res) => {
                this.tabular = res;
                console.log(this.tabular);
            });
        });
    }
}
