import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RentcarPage } from './rentcar.page';

describe('RentcarPage', () => {
  let component: RentcarPage;
  let fixture: ComponentFixture<RentcarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RentcarPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RentcarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
