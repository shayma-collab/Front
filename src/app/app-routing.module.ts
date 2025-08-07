import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DemandeStageComponent } from './pages/demande-stage/demande-stage.component';
import { DemandeStageFormComponent } from './pages/demande-stage-form/demande-stage-form.component';
import { FullComponent } from './layouts/full/full.component';
import { HistoriqueDemandesComponent } from './pages/historique-demandes/historique-demandes.component'; // ✅ Ajout de l'import

export const Approutes: Routes = [
  {
    path: '',
    component: FullComponent,
    children: [
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
      {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'about',
        loadChildren: () => import('./about/about.module').then(m => m.AboutModule)
      },
      {
        path: 'component',
        loadChildren: () => import('./component/component.module').then(m => m.ComponentsModule)
      },
      {
        path: 'demande-stage',
        component: DemandeStageComponent,
        data: {
          title: 'Demande de stage',
          urls: [{ title: 'Formulaire', url: '/demande-stage' }]
        }
      },
      {
        path: 'demande-stage-form',
        component: DemandeStageFormComponent
      },
      {
        path: 'historique-demandes',
        component: HistoriqueDemandesComponent,
        data: {
          title: 'Historique des demandes',
          urls: [{ title: 'Historique', url: '/historique-demandes' }]
        }
      }
    ]
  },
  {
    path: '**',
    redirectTo: '/starter'
  }
];

