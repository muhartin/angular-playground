import { Component, OnInit } from '@angular/core';
import {
    FormArray,
    FormBuilder,
    FormControl,
    FormGroup,
    Validators,
} from '@angular/forms';

interface Test {
  id: number;
  foo: string;
  bar: string;
}

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  readonly name: string;

  testForm: FormGroup;

  allTest: Test[];

  constructor(private formBuilder: FormBuilder) {
    this.name = 'Angular 8';

    // Init Form
    this.createForm();

    // Test insert value
    const item1 = {
      id: 111,
      foo: 'Makan'
    }

    const item2 = {
      id: 222,
      foo: 'Minum'
    }

    this.allIncome.push(new FormControl(item1));
    this.allIncome.push(new FormControl(item2));

    this.allTest = [
      {
        id: 1,
        foo: 'Foo',
        bar: 'Bar'
      },
      {
        id: 2,
        foo: 'Fooa',
        bar: 'Bara'
      },
      {
        id: 3,
        foo: 'Foob',
        bar: 'Barb'
      },
      {
        id: 4,
        foo: 'Fooc',
        bar: 'Barc'
      },
    ]
  }

  get allIncome() {
    return this.testForm.get('allIncome') as FormArray;
  }

  ngOnInit() {

  }

  private createForm() {
    this.testForm = this.formBuilder.group({
      foo: [''],
      bar: [0],
      allIncome: this.formBuilder.array([])
    })
  }

  onChkForm() {
    const testForm = this.testForm.getRawValue();
    const allIncome = this.allIncome;

    // Test output
    console.log('check testForm: ', testForm);
    console.log('allIncome arr: ', allIncome.getRawValue());
    console.log('allIncome length: ', allIncome.length);

    // Do foreach array
    if (allIncome.length > 0) {
      for (const item of allIncome.getRawValue()) {
        // console.log('allIcome item: ', item);
      }
    }

    // Do remove array item

    // Test output
    // const indexId = 0;
    // allIncome.removeAt(indexId);

    const test = allIncome.removeAt(allIncome.value.findIndex(i => i.id === 222));

    console.log('test: ', test);

    // console.log('test array: ', allIncome);

    console.log('after delete: ', allIncome.getRawValue());
  }

  onSave(test: any) {
    test = { id: 5, foo: 'newFoo', bar: 'newBar' };

    const newL = this.allTest.push(test);

    console.log('test: ', test);
    console.log('new Length: ', newL);
  }

  onRemove(index: number) {
    const remove = this.allTest.splice(index, 1);

    console.log('removed: ', remove);
  }
}
