import { Etudiant } from './etudiant.model';
import { OffreStage } from './offre-stage.model';

export interface DemandeStage {
  id?: number;
  entreprise?: string;
  sujet?: string;
  dateDebut?: string; // format ISO string: "2025-07-17"
  dateFin?: string;
  etat?: string;
  organismeAccueil?: string;
  departement?: string;
  responsableDirect?: string;
  fonctionResponsableDirect?: string;
  adresse?: string;
  fax?: string;
  tel?: string;
  email?: string;
  cvFileUrl?: string;

  // Relations
  etudiant?: Etudiant;
  offreStage?: OffreStage;
}
