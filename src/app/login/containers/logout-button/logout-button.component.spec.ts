import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { LoginDetails } from '@app/authentication/model/login-details';
import { AuthenticationService } from '@app/authentication/service/authentication.service';
import { LogoutButtonComponent } from './logout-button.component';

describe('LogoutButtonComponent', () => {
  let component: LogoutButtonComponent;
  let fixture: ComponentFixture<LogoutButtonComponent>;
  let authenticationServiceStub: Partial<AuthenticationService>;
  let user: LoginDetails;

  beforeEach(async () => {
    user = new LoginDetails();

    authenticationServiceStub = {
      getUser(): LoginDetails {
        return user;
      }
    };

    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule
      ],
      declarations: [
        LogoutButtonComponent
      ],
      providers: [{ provide: AuthenticationService, useValue: authenticationServiceStub }]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoutButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
