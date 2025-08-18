import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DemandeStageService } from './demande-stage.service';

describe('DemandeStageService', () => {
  let service: DemandeStageService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule] // <-- ajouté ici
    });
    service = TestBed.inject(DemandeStageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
