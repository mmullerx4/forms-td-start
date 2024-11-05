import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // pass f as an argument and store it in a variable signupForm
  @ViewChild('f', { static: false }) signupForm: NgForm;
  defaultQuestion = 'pet';
  answer = '';
  genders = ['male', 'female'];
  user = {
    username: '',
    email: '',
    secretQuestion: '',
    answer: '',
    gender: ''
  };
  submitted = false;

  //do a preset plugin for a particular user
  //in other words setting the values of the controls with one command (javaScript object)
  suggestUserName() {
    const suggestedName = 'Superuser';
    // this.signupForm.setValue({
    //   userData: {
    //     username: suggestedName,
    //     email: ''
    //   },
    //   secret: 'pet',
    //   questionAnswer: '',
    //   gender: 'female'
    // });
    //this only sets the name and not overide the other controls
    // can also use setValue here to override all of the form
    this.signupForm.form.patchValue({
      userData: {
        username: suggestedName
      }
    });
  }

  // use this when doing this <form (ngSubmit)="onSubmit()" #f="ngForm">:
  // onSubmit(form: NgForm) {
  //   console.log(form);
  // }

  // when using @viewChild
  onSubmit() {
      this.submitted = true;
      this.user.username = this.signupForm.value.userData.username;
      this.user.email = this.signupForm.value.userData.email;
      this.user.secretQuestion = this.signupForm.value.secret;
      this.user.answer = this.signupForm.value.questionAnswer;
      this.user.gender = this.signupForm.value.gender;

      this.signupForm.reset();
    }

}
