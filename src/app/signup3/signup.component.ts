import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms'

@Component({
  selector: 'app-signup3',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class Signup3Component implements OnInit {

  formSignUp: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.formSignUp = this.fb.group({
      email: ['', [Validators.required, gmailValidator]],
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
function gmailValidator(formControl: FormControl) {
  if(formControl.value.includes('@gmail.com')) return null;
  else return { gmail: true };
}
