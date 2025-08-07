import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DemandeStageService {
  private baseUrl = 'http://localhost:8080/api/demandes';

  constructor(private http: HttpClient) {}

  // 🔴 ici on remplace `DemandeStage` par `FormData`
  createDemande(formData: FormData): Observable<any> {
    return this.http.post(this.baseUrl, formData);
  }

  // autres méthodes utiles
  getAllDemandes(): Observable<any> {
    return this.http.get(this.baseUrl);
  }

  getDemandesByEtudiantId(etudiantId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/etudiant/${etudiantId}`);
  }
  supprimerDemande(id: number) {
return this.http.delete(`${this.baseUrl}/${id}`);
}
}
