import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DemandeStage } from '../models/demande-stage.model';

@Injectable({
  providedIn: 'root'
})
export class DemandeStageService {

  private apiUrl = 'http://localhost:8080/api/demandes'; // 🔁 À adapter si l’URL diffère

  constructor(private http: HttpClient) { }

  getDemandesByEtudiantId(etudiantId: number): Observable<DemandeStage[]> {
    return this.http.get<DemandeStage[]>(`${this.apiUrl}/etudiant/${etudiantId}`);
  }

  getAllDemandes(): Observable<DemandeStage[]> {
    return this.http.get<DemandeStage[]>(this.apiUrl);
  }
  // ✅ Supprimer une demande de stage
supprimerDemande(id: number) {
  return this.http.delete(`http://localhost:8080/api/demandes/${id}`);
}

}
