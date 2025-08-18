import { Component, OnInit } from '@angular/core';
import { DemandeStage } from 'src/app/models/demande-stage.model';
import { DemandeStageService } from 'src/app/services/demande-stage.service';

@Component({
  selector: 'app-historique-demandes',
  templateUrl: './historique-demandes.component.html',
  styleUrls: ['./historique-demandes.component.scss']
})
export class HistoriqueDemandesComponent implements OnInit {
  demandes: DemandeStage[] = [];
  loading = true;

  constructor(private demandeStageService: DemandeStageService) {}

  ngOnInit(): void {
    this.chargerDemandes();
  }

  chargerDemandes(): void {
    this.demandeStageService.getAllDemandes().subscribe({
      next: (data) => {
        // On mappe chaque demande pour s'assurer que cvFileUrl existe
        this.demandes = data.map(d => ({
          ...d,
          cvFileUrl: d.cvFileUrl || undefined
        }));
        this.loading = false;
      },
      error: (err) => {
        console.error('Erreur lors du chargement des demandes:', err);
        this.loading = false;
      }
    });
  }

  voirCV(url: string | undefined): void {
    if (url) {
      window.open(url, '_blank');
    } else {
      alert('Aucun CV disponible pour cette demande.');
    }
  }

  supprimerDemande(id?: number): void {
    if (id === undefined) return;

    if (confirm('❗ Voulez-vous vraiment supprimer cette demande ?')) {
      this.demandeStageService.supprimerDemande(id).subscribe({
        next: () => {
          this.demandes = this.demandes.filter(d => d.id !== id);
        },
        error: (err) => {
          console.error('Erreur lors de la suppression:', err);
        }
      });
    }
  }
}
