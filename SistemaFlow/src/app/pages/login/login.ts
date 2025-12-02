import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css'],
})

export class Login {
  constructor(private router: Router) {}

  loginUsuario: string = '';
  senhaUsuario: string = '';

  fazerLogin() {
    const loginCorreto = "SKA122";
    const senhaCorreta = "123";

    if (this.loginUsuario === loginCorreto && this.senhaUsuario === senhaCorreta) {
      console.log("Login bem-sucedido!");
      this.router.navigate(['home']);
    } else {
      alert("Usuário não cadastrado");
    }
  }
}
