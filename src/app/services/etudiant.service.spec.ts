import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { EtudiantService } from './etudiant.service';

describe('EtudiantService', () => {
  let service: EtudiantService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule] // <-- ajouté
    });
    service = TestBed.inject(EtudiantService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
