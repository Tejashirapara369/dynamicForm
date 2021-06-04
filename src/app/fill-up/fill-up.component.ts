import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { fields, formObj } from '../shared/fields';
import { generateForm } from '../shared/control-generator';

@Component({
  selector: 'app-fill-up',
  templateUrl: './fill-up.component.html',
  styleUrls: ['./fill-up.component.css']
})
export class FillUpComponent implements OnInit {

  public form: FormGroup  


  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    let fieldArray = formObj['fillupForm'];
    this.form = this.fb.group(generateForm(fieldArray))
  }

}
