import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './login.html',
  styleUrls: ['./login.css'],
})

export class Login {
  constructor(private router: Router) {}


  
  changeInfoToHeader() {
    console.log('Botão de Entrar clicado');
    this.router.navigate(['home']);
    
  }
}