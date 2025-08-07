import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { SpinnerComponent } from './shared/spinner.component';

// ✅ Composants standalone (dans `imports`)
import { FullComponent } from './layouts/full/full.component';
import { NavigationComponent } from './shared/header/navigation.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';

import { DemandeStageComponent } from './pages/demande-stage/demande-stage.component';
import { DemandeStageFormComponent } from './pages/demande-stage-form/demande-stage-form.component';

import { Approutes } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    SpinnerComponent,
    DemandeStageComponent,
    DemandeStageFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    RouterModule.forRoot(Approutes, { useHash: false }),

    // ✅ Standalone components doivent être importés ici
    FullComponent,
    NavigationComponent,
    SidebarComponent
  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: PathLocationStrategy
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
