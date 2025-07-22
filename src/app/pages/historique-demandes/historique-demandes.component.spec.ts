import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoriqueDemandesComponent } from './historique-demandes.component';

describe('HistoriqueDemandesComponent', () => {
  let component: HistoriqueDemandesComponent;
  let fixture: ComponentFixture<HistoriqueDemandesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HistoriqueDemandesComponent]
    });
    fixture = TestBed.createComponent(HistoriqueDemandesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
