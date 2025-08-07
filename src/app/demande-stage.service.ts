import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DemandeStageService {
  private baseUrl = 'http://localhost:8080/api/demandes'; // ✅ Adapté à ton backend Spring Boot

  constructor(private http: HttpClient) {}

  // ✅ Création d'une demande avec fichier CV (FormData)
  createDemande(formData: FormData): Observable<any> {
    return this.http.post(this.baseUrl, formData);
  }

  // ✅ Optionnel : récupération de toutes les demandes
  getAllDemandes(): Observable<any> {
    return this.http.get(this.baseUrl);
  }

  // ✅ Optionnel : récupération des demandes par étudiant
  getDemandesByEtudiantId(etudiantId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/etudiant/${etudiantId}`);
  }
}
