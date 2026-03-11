import { Routes } from '@angular/router';

import {  HomeComponent } from './pages/home/home';
import { About } from './pages/about/about';
import { Contact } from './pages/contact/contact';
import {  LoginComponent } from './pages/login/login';

import { Principal } from './pages/principal';
import { ContactFormComponent } from './pages/contact-form/contact-form';
import { RegisterComponent } from './pages/register/register';

export const routes: Routes = [

{
path: '',
component: Principal,
children: [

{ path: '', redirectTo: 'home', pathMatch: 'full' },
{ path: 'home', component: HomeComponent },
{ path: 'about', component: About },
{ path: 'contact', component: Contact },
{ path: 'login', component: LoginComponent },
{ path: 'register', component: RegisterComponent },
{ path: 'contact-form', component: ContactFormComponent }
]
}

];