import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface DemandeStageRequest {
  sujet: string;
  entreprise: string;
  organismeAccueil?: string;
  departement?: string;
  responsableDirect?: string;
  fonctionResponsableDirect?: string;
  adresse?: string;
  fax?: string;
  tel?: string;
  email: string;
  dateDebut: string;
  dateFin: string;
}

@Injectable({
  providedIn: 'root'
})
export class DemandeStageService {

  private apiUrl = 'http://localhost:8080/api/demandes';

  constructor(private http: HttpClient) {}

  createDemande(demande: DemandeStageRequest): Observable<string> {
    // Angular HttpClient ajoute automatiquement le header Content-Type: application/json
    return this.http.post<string>(this.apiUrl, demande);
  }
}
