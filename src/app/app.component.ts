import { Component, OnInit } from "@angular/core";
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from "@angular/forms";

interface Test {
  id: number;
  foo: string;
  bar: string;
}

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  name: string;

  constructor(private formBuilder: FormBuilder) {
    this.name = "Angular 8";
  }

  ngOnInit() {}
}
