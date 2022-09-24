import { TestBed } from '@angular/core/testing';
import { WebShellFeatureModule } from '@d13/web/shell/feature';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebShellFeatureModule],
      declarations: [AppComponent],
    }).compileComponents();
  });
});
