import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { formObj, fields } from '../shared/fields'
import { generateForm } from '../shared/control-generator'

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  public form: FormGroup;


  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    let formField = formObj['signInForm']
    this.form = this.fb.group(generateForm(formField))
      // console.log('form', this.form);

      
      
  }

  onSubmit(){
    console.log('this.form',this.form);
     
  }

}
