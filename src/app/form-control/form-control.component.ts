import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { fields, formObj } from '../shared/fields';
import { generateForm } from '../shared/control-generator';

@Component({
  selector: 'app-form-control',
  templateUrl: './form-control.component.html',
  styleUrls: ['./form-control.component.css']
})
export class FormControlComponent implements OnInit {

  @Input() form: FormGroup;
  @Input() key: string;

  constructor() { }

  ngOnInit(): void {
   console.log('-======', this.form)
  }

  get FieldObj() {
    return fields[this.key]
  }

  get control() {
    return this.form.get(this.key);
  }

  get isInvalid() {
    return this.control.invalid && this.control.touched;
  }

}
