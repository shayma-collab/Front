import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OffreStageService {
  private apiUrl = 'http://localhost:8080/api/offres'; // 🔁 à adapter si ton endpoint est différent

  constructor(private http: HttpClient) {}

  getAllOffres(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
