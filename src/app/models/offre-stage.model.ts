export interface OffreStage {
  id?: number;
  titre?: string;
  entreprise?: string;
  sujet?: string;
  description?: string;
  lieu?: string;
  duree?: string;
  datePublication?: string; // format ISO string: "2025-07-17"
  dateDebut?: string;
  dateFin?: string;
  etat?: string;
  organismeAccueil?: string;
  departement?: string;
  responsableDirect?: string;
  fonctionResponsableDirect?: string;
}
