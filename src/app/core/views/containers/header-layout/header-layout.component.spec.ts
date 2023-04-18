import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HeaderLayoutComponent } from './header-layout.component';
import { AuthenticationContainer } from '@app/core/authentication/services/authentication-container.service';
import { NavbarComponent } from '@app/shared/navigation/components/navbar/navbar.component';

describe('HeaderLayoutComponent', () => {
  let component: HeaderLayoutComponent;
  let fixture: ComponentFixture<HeaderLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        HeaderLayoutComponent,
        NavbarComponent
      ],
      providers: [
        AuthenticationContainer
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(HeaderLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
