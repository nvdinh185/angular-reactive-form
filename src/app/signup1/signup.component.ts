import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-signup1',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class Signup1Component implements OnInit {
  data = [
    { name: 'email', value: '', validator: [{ required: true, min: 6, max: 10 }] },
    { name: 'password', value: '', validator: [{ required: true, min: 6, max: 10 }] }
  ]
  constructor() { }

  ngOnInit() { }

  onSubmit() {
    let valid = false;
    this.data.some(el => {
      let validatorFns = [];
      if (el.validator) {
        el.validator.forEach(req => {
          if (req.required) validatorFns.push(Validators.required);
          if (req.min) validatorFns.push(Validators.minLength(req.min));
          if (req.max) validatorFns.push(Validators.maxLength(req.max));
        })
      }
      let control = new FormControl(el.value, validatorFns);
      valid = !control.invalid;
      return control.invalid;
    })

    if (valid) {
      console.log("form is valid");
    } else {
      console.log("form is invalid");
    }
  }
}
