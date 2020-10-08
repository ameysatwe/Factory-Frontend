import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { FactoryComponent } from './pages/factory/factory.component';
import { TableComponent } from './table/table.component';

const routes: Routes = [
    { path: 'table/:stuff', component: TableComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'components/factory', component: FactoryComponent },
    { path: 'components/queue', component: TableComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
