import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
// Libreria para graficos
import { ChartsModule } from 'ng2-charts';
// Mis Modulos
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
// Mis Rutas
import { PAGES_ROUTES } from './pages.routes';
// Mis Pages
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
// temporal | Componentes reutilizables
import { IncrementadorComponent } from '../components/incrementador/incrementador.component';
import { GraficoDonaComponent } from '../components/grafico-dona/grafico-dona.component';

@NgModule({
  declarations: [
    PagesComponent,
    DashboardComponent,
    ProgressComponent,
    Graficas1Component,
    IncrementadorComponent,
    GraficoDonaComponent,
    AccountSettingsComponent,
  ],
  exports: [DashboardComponent, ProgressComponent, Graficas1Component],
  // Acá me traifo mi modulo con modulos compartidos que se usaran en todo lado
  // Finalmente me traigo mi archivo de rutas de PagesModule
  imports: [SharedModule, PAGES_ROUTES, FormsModule, ChartsModule],
})
export class PagesModule {}
