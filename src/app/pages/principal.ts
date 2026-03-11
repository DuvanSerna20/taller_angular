import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Nav } from './nav/nav';
import { Footer } from './footer/footer';


@Component({
  selector: 'app-principal',
  standalone: true,
  imports: [Nav, RouterModule, Footer],
  templateUrl: './principal.html',
  styleUrl: './principal.css',
})
export class Principal {}
