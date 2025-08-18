export interface Etudiant {
  id: number;
  nom: string;
  prenom: string;
  emailInstitutionnel: string;
  niveau: string;
  departement: string;
  specialite: string;
  motDePasse: string;
  email?: string;
}

export interface DemandeStage {
  id: number;
  dateDebut: string;
  dateFin: string;
  entreprise: string;
  sujet: string;
  organismeAccueil?: string;
  departement?: string;
  responsableDirect?: string;
  fonctionResponsableDirect?: string;
  adresse?: string;
  fax?: string;
  tel?: string;
  email?: string;
  etat: string;
  offreStage?: any;
  etudiant?: Etudiant;
  cvFileUrl?: string;
}
