import { TestBed } from '@angular/core/testing';
import { AuthenticationContainer } from '../services/authentication-container.service';
import { BasicAuthenticationInterceptor } from './basic-authentication.interceptor';

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
