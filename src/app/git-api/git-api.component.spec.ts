import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GitApiComponent } from './git-api.component';

describe('GitApiComponent', () => {
  let component: GitApiComponent;
  let fixture: ComponentFixture<GitApiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GitApiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GitApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
