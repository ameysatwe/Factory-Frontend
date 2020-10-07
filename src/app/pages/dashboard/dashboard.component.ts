import { Component, OnInit } from '@angular/core';
import { element } from 'protractor';
import { HelperService } from 'src/app/helper.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
    factoryStats = [];

    machine_list = ['machine_one', 'machine_two', 'machine_three'];
    machine_no = [];
    machine_tables = [];
    constructor(private httpHelper: HelperService) {}
    ngOnInit(): void {
        this.gettingFacStats();
        this.gettingMachineStats();
    }
    gettingFacStats() {
        this.httpHelper.getQueue('factory').subscribe((item) => {
            this.machine_list.forEach((m) => {
                if (item[0][m] != undefined) {
                    this.machine_no.push(item[0][m]);
                }
            });
            this.machine_no.forEach((machine) => {
                this.httpHelper.getQueue(`machine`).subscribe((item) => {
                    console.log(item);
                    this.machine_tables = item;
                });
            });
            console.log(this.machine_no);
            this.factoryStats = item;
        });
    }
    gettingMachineStats() {
        console.log(this.machine_no);
    }
}
