import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
// import { FormGroup } from '@angular/forms';
import { UsuarioService } from '../services/service.index';
import { Usuario } from '../models/usuario.model';

declare function iniciar_plugins();
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'], // asignamos css por ruta => styleUrls:
})
export class LoginComponent implements OnInit {
  email: string;
  recuerdame: boolean = false;
  constructor(public router: Router, public _usuarioService: UsuarioService) {}

  ngOnInit(): void {
    iniciar_plugins();
    // Recordar correo en el login
    this.email = localStorage.getItem('email') || '';
    if (this.email.length > 1) {
      this.recuerdame = true;
    }
  }

  ingresar(forma: NgForm) {
    if (forma.invalid) {
      return;
    }

    let usuario = new Usuario(null, forma.value.email, forma.value.password);
    this._usuarioService
      .login(usuario, forma.value.recuerdame)
      .subscribe((correcto) => this.router.navigate(['/dashboard']));

    // this.router.navigate(['/dashboard']);
  }
}
