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
    total=0;
    constructor(
        private helperService: HelperService,
        private route: ActivatedRoute
    ) {}

    ngOnInit(): void {
        const interval=setInterval(() => {
                this.helperService.get('queue').subscribe((res) => {
                    this.total=0
                    this.tabular = res;
                    res.forEach((element) => {
                        if (element.completed==true){
                            this.total+=1
                        }
                    });
                    if(this.total==32){
                        clearInterval(interval) //right now this function clears the interval if everything is true. but if its false the requests will keep running
                    }
                    console.log(this.total);
                });
            }, 3000);
        
    }
    getQueue() {}
}
