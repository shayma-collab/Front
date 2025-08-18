import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DemandeStage } from '../models/demande-stage.model';

@Injectable({
  providedIn: 'root'
})
export class DemandeStageService {
  private baseUrl = 'http://localhost:8080/api/demandes';

  constructor(private http: HttpClient) {}

  createDemande(formData: FormData): Observable<any> {
    return this.http.post(this.baseUrl, formData);
  }

  getAllDemandes(): Observable<DemandeStage[]> {
    return this.http.get<DemandeStage[]>(this.baseUrl);
  }

  supprimerDemande(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
