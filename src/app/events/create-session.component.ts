import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { ISession } from './shared/event.model';
import { restrictedWords } from './shared/restrictedWords.validator';

@Component({
  selector: 'create-session',
  templateUrl: './create-session.component.html',
  styles: [`
    em {
      float: right; 
      color:#E05C65;
      padding-left: 10px;
    }
    .error input {
      background-color: #E3C3C5;
    }
  `]
})
export class CreateSessionComponent implements OnInit {

  @Output() saveNewSession = new EventEmitter<ISession>();
  @Output() cancelAddSession = new EventEmitter();

  newSessionForm: FormGroup;
  name: FormControl;
  presenter: FormControl;
  duration: FormControl;
  level: FormControl;
  abstract: FormControl;

  ngOnInit() {
    this.name = new FormControl('', Validators.required);
    this.presenter = new FormControl('', Validators.required);
    this.duration = new FormControl('', Validators.required);
    this.level = new FormControl('', Validators.required);
    this.abstract = new FormControl('', [
      Validators.required,
      Validators.maxLength(400),
      restrictedWords(['foo', 'bar'])
    ]);

    this.newSessionForm = new FormGroup({
      name: this.name,
      presenter: this.presenter,
      duration: this.duration,
      level: this.level,
      abstract: this.abstract
    })
  }

  saveSession(formValues) {
    const newSession: ISession = {
      id: undefined,
      name: formValues.name,
      presenter: formValues.presenter,
      duration: +formValues.duration,
      level: formValues.level,
      abstract: formValues.abstract,
      voters: []
    };
    console.log(newSession);
    this.saveNewSession.emit(newSession);
  }

  cancel() {
    this.cancelAddSession.emit();
  }
}