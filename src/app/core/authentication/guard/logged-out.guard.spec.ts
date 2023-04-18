import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { LoggedOutGuard } from './logged-out.guard';
import { AuthenticationContainer } from '../services/authentication-container.service';

describe('LoggedOutGuard', () => {
  let guard: LoggedOutGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      providers: [
        AuthenticationContainer
      ]
    });
    guard = TestBed.inject(LoggedOutGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
