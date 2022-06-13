import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit {

  /*registrationForm = new FormGroup({
    userName: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
    address: new FormGroup({
      city: new FormControl(''),
      state: new FormControl(''),
      postalCode: new FormControl('')
    })
  });*/

  loadApiData(){
    /*this.registrationForm.setValue({
      userName: 'UserName',
      password: 'Password',
      confirmPassword: 'Password',
      address: {
        city: 'City',
        state: 'State',
        postalCode: 'Postal Code'
      }
    });*/
    this.registrationForm.patchValue({
      userName: 'User Name',
      password: 'Password',
      confirmPassword: 'Password',
      address: {
        city: 'City',
        state: 'State',
        postalCode: 'Postal Code'
      }
    });
  }

  constructor(private formBuilder: FormBuilder) {}

  registrationForm = this.formBuilder.group({
    userName: ['', Validators.compose([Validators.required, Validators.minLength(5)])],
    password: ['', Validators.required],
    confirmPassword: ['', Validators.required],

    address: this.formBuilder.group({
      city: ['', Validators.required],
      state: ['', Validators.required],
      postalCode: ['', Validators.required]
    })
  });

  ngOnInit(): void {
  }

  get f(){
    var fControls = this.registrationForm.controls;
    console.log(fControls);
    var fAddress = fControls['address'];    
    //console.log(fAddress.get('city'));
    //var addressGroup = this.registrationForm.get('address');
    //console.log(addressGroup?.get('city')?.get('value'));
    //console.log(this.registrationForm.controls['address']);    
    return this.registrationForm.controls;
  }

  get fAddress(){
    return this.registrationForm.controls['address'];
  }

  get fCity(){
    return this.registrationForm.controls['address'].get('city');
  }

  get fState(){
    return this.registrationForm.controls['address'].get('state');
  }

  get fPostal(){
    return this.registrationForm.controls['address'].get('postalCode');
  }

  submitted = false;
  onSubmit(){
    this.submitted = true;
  }

}
