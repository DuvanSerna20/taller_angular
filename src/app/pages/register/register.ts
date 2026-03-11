import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, AsyncValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { map, delay } from 'rxjs/operators';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './register.html',
  styleUrls: ['./register.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;

  
  private registeredEmails = ['test@test.com', 'admin@admin.com', 'user@user.com'];

  constructor(private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      personalData: this.fb.group({
        nombre: ['', [Validators.required, Validators.minLength(2)]],
        edad: ['', [Validators.required, Validators.min(18), Validators.max(100)]]
      }),
      accessData: this.fb.group({
        email: ['', [Validators.required, Validators.email], [this.emailExistsValidator()]],
        password: ['', [Validators.required, Validators.minLength(6)]]
      })
    });
  }

  ngOnInit(): void {}

  emailExistsValidator(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      return of(this.registeredEmails.includes(control.value)).pipe(
        delay(1000), 
        map(exists => exists ? { emailExists: true } : null)
      );
    };
  }

  get personalData() {
    return this.registerForm.get('personalData') as FormGroup;
  }

  get accessData() {
    return this.registerForm.get('accessData') as FormGroup;
  }

  onSubmit() {
    this.submitted = true;
    if (this.registerForm.valid) {
      console.log('Formulario válido:', this.registerForm.value);
      alert('Registro exitoso!');
    }
  }
}