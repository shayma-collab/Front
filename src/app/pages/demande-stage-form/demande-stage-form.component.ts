import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DemandeStageService } from 'src/app/services/demande-stage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-demande-stage-form',
  templateUrl: './demande-stage-form.component.html',
  styleUrls: ['./demande-stage-form.component.scss']
})
export class DemandeStageFormComponent implements OnInit {
  demandeStageForm!: FormGroup;
  cvFile?: File;

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
      email: ['', [Validators.email]],
      dateDebut: ['', Validators.required],
      dateFin: ['', Validators.required],
      cvFile: [null]
    });
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.cvFile = input.files[0];
    }
  }

  onSubmit(): void {
    if (this.demandeStageForm.invalid) {
      alert('Veuillez remplir tous les champs obligatoires.');
      return;
    }

    const formData = new FormData();
    const values = this.demandeStageForm.value;

    for (const key in values) {
      if (values[key]) {
        formData.append(key, values[key]);
      }
    }

    if (this.cvFile) {
      formData.append('cvFile', this.cvFile);
    }

    this.demandeStageService.createDemande(formData).subscribe({
      next: () => {
        alert('Demande de stage envoyée avec succès');
        this.router.navigate(['/mes-demandes']);
      },
      error: (err) => {
        console.error('Erreur lors de la soumission :', err);
        alert("Une erreur s'est produite lors de la soumission.");
      }
    });
  }
}
