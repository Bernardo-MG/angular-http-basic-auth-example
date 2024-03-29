import { TestBed } from '@angular/core/testing';
import { SecurityContainer } from '../services/security-container.service';
import { BasicAuthenticationInterceptor } from './basic-authentication.interceptor';

describe('BasicAuthenticationInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      BasicAuthenticationInterceptor,
      SecurityContainer
    ]
  }));

  it('should be created', () => {
    const interceptor: BasicAuthenticationInterceptor = TestBed.inject(BasicAuthenticationInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
