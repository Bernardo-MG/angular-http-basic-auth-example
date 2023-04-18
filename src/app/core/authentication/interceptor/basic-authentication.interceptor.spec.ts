import { TestBed } from '@angular/core/testing';

import { BasicAuthenticationInterceptor } from './basic-authentication.interceptor';
import { AuthenticationContainer } from '../services/authentication-container.service';

describe('BasicAuthenticationInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      BasicAuthenticationInterceptor,
      AuthenticationContainer
    ]
  }));

  it('should be created', () => {
    const interceptor: BasicAuthenticationInterceptor = TestBed.inject(BasicAuthenticationInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
