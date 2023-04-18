import { TestBed } from '@angular/core/testing';

import { UnauthorizedErrorInterceptor } from './unauthorized.interceptor';
import { AuthenticationContainer } from '../services/authentication-container.service';

describe('UnauthorizedErrorInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      UnauthorizedErrorInterceptor,
      AuthenticationContainer
    ]
  }));

  it('should be created', () => {
    const interceptor: UnauthorizedErrorInterceptor = TestBed.inject(UnauthorizedErrorInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
