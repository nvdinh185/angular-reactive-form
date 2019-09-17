import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms'

@Component({
  selector: 'app-signup2',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class Signup2Component implements OnInit {

  formSignUp: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.formSignUp = this.fb.group({
      email: '',
      password: '',
      subject: this.fb.group({
        nodeJS: true,
        angular: false,
        react: false
      })
    })
  }
  onSubmit() {
    console.log(this.formSignUp.value);
  }
}