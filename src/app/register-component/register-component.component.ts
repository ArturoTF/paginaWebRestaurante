import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from '../services/user-service.service'; // Asegúrate de importar correctamente el servicio
import { User } from '../class/user'; // Importa la clase User

@Component({
  selector: 'app-register-component',
  templateUrl: './register-component.component.html',
  styleUrls: ['./register-component.component.css']
})
export class RegisterComponentComponent {
  constructor(
    private router: Router,
    private userService: UserServiceService // Inyecta el servicio aquí
  ) {}

  user = "";
  pass = "";
  email = "";
  secondpass = "";

  clickRegister() {
    this.email = (<HTMLInputElement>document.getElementById("correo")).value;
    this.user = (<HTMLInputElement>document.getElementById("username")).value;
    this.pass = (<HTMLInputElement>document.getElementById("password")).value;
    this.secondpass = (<HTMLInputElement>document.getElementById("Rpassword")).value;
    const checkbox = document.getElementById("checkbox") as HTMLInputElement;
  
    if (
      this.user !== "" &&
      this.pass !== "" &&
      this.email !== "" &&
      this.secondpass !== "" &&
      this.pass === this.secondpass &&
      checkbox.checked
    ) {
      console.log("Intentando añadir usuario");
      this.userService.añadirUsuario(this.user, this.email, this.pass).subscribe(
        res  => {
          console.log("Registro exitoso:" );
          this.router.navigate(['MainComponentComponent']);
        }
      );
    } else {
      console.log("Validación fallida");
    }
  }
  
  
}


class Register{
  correo:string;
  usuario:string;
  password:string;
  password2:string;
  constructor(p1:string,p2:string,p3:string,p4:string){
    this.correo = p1;
    this.usuario = p2;
    this.password = p3;
    this.password2 = p4;
  }
}


