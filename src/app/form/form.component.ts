import { Component, OnInit } from "@angular/core";

import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from "@angular/forms";

@Component({
  selector: "app-form",
  templateUrl: "form.component.html"
})
export class FormComponent implements OnInit {
  readonly title: string;
  readonly subtitle: string;

  testForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.title = "Title";
    this.subtitle = "";
  }

  get allIncome() {
    return this.testForm.get("allIncome") as FormArray;
  }

  ngOnInit() {}

  private createForm() {
    this.testForm = this.formBuilder.group({
      foo: [""],
      bar: [0],
      allIncome: this.formBuilder.array([])
    });
  }

  onChkForm() {
    console.log("check form: ", this.testForm);
  }
}
