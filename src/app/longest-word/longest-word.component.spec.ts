import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LongestWordComponent } from './longest-word.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';

describe('LongestWordComponent', () => {
  let component: LongestWordComponent;
  let fixture: ComponentFixture<LongestWordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        FormsModule,
        NoopAnimationsModule,
        MatInputModule,
        MatButtonModule,
        MatFormFieldModule
      ],
      declarations: [ LongestWordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LongestWordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form invalid when empty', () => {
    expect(component.form.valid).toBeFalsy();
  });

  it('text field validity', () => {
    let text = component.form.controls['text'];
    expect(text.valid).toBeFalsy();
  });

  it('should correctly find the longest word', () => {
    component.form.controls['text'].setValue('This is the longest word');
    expect(component.form.valid).toBeTruthy();

    component.findLongestWord();

    expect(component.longestWord).toEqual('longest');
  });


  it('should correctly discard line break and other characters and find the longest word', () => {
    component.form.controls['text'].setValue('This is the longest word\n\nThis%is@New*line');
    expect(component.form.valid).toBeTruthy();

    component.findLongestWord();

    expect(component.longestWord).toEqual('longest');
  });
});
