import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { TableComponent } from './table/table.component';

const routes: Routes = [
    { path: 'table/:stuff', component: TableComponent },
    { path: 'dashboard', component: DashboardComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
