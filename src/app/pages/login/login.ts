import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;  // <--- IMPORTANTE: esta variable debe estar declarada

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(4),]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  ngOnInit(): void {}

  // Getter para fácil acceso a los campos del formulario
  get f() {
    return this.loginForm.controls;
  }

  onSubmit() {
    this.submitted = true;  // <--- IMPORTANTE: se activa al enviar

    if (this.loginForm.invalid) {
      return;
    }

    // Aquí iría la lógica de login
    console.log('Login exitoso:', this.loginForm.value);
    alert('¡Login exitoso!');
    
    // Resetear el formulario después de enviar (opcional)
    // this.loginForm.reset();
    // this.submitted = false;
  }
}