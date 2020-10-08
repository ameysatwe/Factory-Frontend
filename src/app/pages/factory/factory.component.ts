import { isNgTemplate } from '@angular/compiler';
import { Component, IterableDiffers, OnInit } from '@angular/core';
import { HelperService } from 'src/app/helper.service';

@Component({
    selector: 'app-factory',
    templateUrl: './factory.component.html',
    styleUrls: ['./factory.component.scss'],
})
export class FactoryComponent implements OnInit {
    factoryStats;

    machine_list = ['machine_one', 'machine_two', 'machine_three'];
    machine_no = [];
    machine_tables = [];
    tools = [];
    constructor(private httpHelper: HelperService) {}
    ngOnInit(): void {
        this.gettingFacStats();
        this.gettingMachineStats();
    }
    gettingFacStats() {
        this.httpHelper.get('factory').subscribe((item) => {
            this.machine_list.forEach((m) => {
                if (item[0][m] != undefined) {
                    this.machine_no.push(item[0][m]);
                }
            });
            this.machine_no.forEach((machine) => {
                this.httpHelper.get(`machine/${machine}`).subscribe((item) => {
                    //      console.log(this.machine_tables)
                    this.machine_tables.push(item);
                });
            });
            this.factoryStats = item;
        });
    }
    gettingMachineStats() {
        console.log('Hello' + this.machine_no);
    }
}
