import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  formSignUp: FormGroup;
  constructor() {
  }

  ngOnInit() {
    this.formSignUp = new FormGroup({
      email: new FormControl('dinh@gmail.com'),
      password: new FormControl(),
      subject: new FormGroup({
        nodeJS: new FormControl(),
        angular: new FormControl(true),
        react: new FormControl(false)
      })
    })
  }  
  
  onSubmit() {
    console.log(this.formSignUp.value);
  }

}
