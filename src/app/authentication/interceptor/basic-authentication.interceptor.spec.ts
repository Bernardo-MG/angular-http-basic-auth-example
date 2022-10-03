import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { BasicAuthenticationInterceptor } from './basic-authentication.interceptor';

describe('BasicAuthenticationInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule
    ],
    providers: [
      BasicAuthenticationInterceptor
    ]
  }));

  it('should be created', () => {
    const interceptor: BasicAuthenticationInterceptor = TestBed.inject(BasicAuthenticationInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
