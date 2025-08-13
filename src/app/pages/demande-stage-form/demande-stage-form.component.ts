import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DemandeStageService, DemandeStageRequest } from 'src/app/services/demande-stage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-demande-stage-form',
  templateUrl: './demande-stage-form.component.html',
  styleUrls: ['./demande-stage-form.component.scss']
})
export class DemandeStageFormComponent implements OnInit {
  demandeStageForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private demandeStageService: DemandeStageService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.demandeStageForm = this.fb.group({
      sujet: ['', Validators.required],
      entreprise: ['', Validators.required],
      organismeAccueil: [''],
      departement: [''],
      responsableDirect: [''],
      fonctionResponsableDirect: [''],
      adresse: [''],
      fax: [''],
      tel: [''],
      email: ['', [Validators.required, Validators.email]],
      dateDebut: ['', Validators.required],
      dateFin: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.demandeStageForm.invalid) {
      alert('Veuillez remplir tous les champs obligatoires.');
      return;
    }

    // Cast du formulaire en DemandeStageRequest
    const demande: DemandeStageRequest = this.demandeStageForm.value;

    this.demandeStageService.createDemande(demande).subscribe({
      next: (response) => {
        alert('Demande de stage envoyée avec succès, id: ' + response);
        this.router.navigate(['/mes-demandes']);
      },
      error: (err) => {
        console.error('Erreur lors de la soumission :', err);
        alert("Une erreur s'est produite lors de la soumission.");
      }
    });
  }
}
