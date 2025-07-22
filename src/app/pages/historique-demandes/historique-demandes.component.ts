import { Component, OnInit } from '@angular/core'; 
import { DemandeStageService } from 'src/app/services/demande-stage.service';
import { DemandeStage } from 'src/app/models/demande-stage.model';

@Component({
  selector: 'app-historique-demandes',
  templateUrl: './historique-demandes.component.html',
  styleUrls: ['./historique-demandes.component.scss']
})
export class HistoriqueDemandesComponent implements OnInit {
  demandes: DemandeStage[] = [];

  constructor(private demandeStageService: DemandeStageService) {}

  ngOnInit(): void {
  const demandeExemple: DemandeStage = {
    id: 999,
    entreprise: 'Exemple Entreprise',
    sujet: 'Stage découverte Angular',
    dateDebut: '2025-08-01',
    dateFin: '2025-08-31',
    organismeAccueil: 'Organisme Exemple',
    departement: 'Informatique',
    responsableDirect: 'M. Dupont',
    etat: 'EN_ATTENTE',
    cvFileUrl: undefined
  };

  // Ajouter directement la demande exemple sans appel backend
  this.demandes = [demandeExemple];
}
  voirCV(url: string): void {
    if (url) {
      window.open(url, '_blank');
    } else {
      alert('Aucun CV disponible pour cette demande.');
    }
  }

  supprimerDemande(id?: number): void {
    if (id === undefined) {
      console.warn('Identifiant de la demande indéfini, suppression annulée.');
      return;
    }

    if (confirm('❗ Voulez-vous vraiment supprimer cette demande ?')) {
      this.demandeStageService.supprimerDemande(id).subscribe(() => {
        this.demandes = this.demandes.filter(d => d.id !== id);
      });
    }
  }
}
