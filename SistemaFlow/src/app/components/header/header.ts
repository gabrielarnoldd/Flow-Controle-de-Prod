import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrls: ['./header.css'],
})
export class Header {
  constructor(private router: Router) {}


  
  changeInfoToFluxo() {
    console.log('Botão de fluxo clicado');
    this.router.navigate(['/fluxo']);
  }

  changeInfoToTaktTime() {
    console.log('Botão de takt time clicado');
    this.router.navigate(['/taktTime']);
  }

  changeInfoToMaquinas() {
    console.log('Botão de máquinas clicado');
    this.router.navigate(['/maquinas']);
  }

  changeInfoToVisaoGeral() {
    console.log('Botão de visão geral clicado');
    this.router.navigate(['/home']);
  }

  changeInfoToMateriais() {
    console.log('Botão de materiais clicado');
    this.router.navigate(['/materiais']);
  }

}
