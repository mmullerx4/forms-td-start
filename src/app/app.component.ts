import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // pass f as an argument and store it in a variable signupForm
  @ViewChild('f') signupForm: NgForm;
  defaultQuestion = 'pet';

  suggestUserName() {
    const suggestedName = 'Superuser';
  }

  // use this when doing this: <form (ngSubmit)="onSubmit()" #f="ngForm">
  // onSubmit(form: NgForm) {
  //   console.log(form);
  // }

  // when using @viewChild
  onSubmit() {
      console.log(this.signupForm);
    }

}
