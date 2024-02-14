import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from '../services/user-service.service';
import { User } from '../class/user';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit{
  users!: User[];


  constructor(private router: Router, private userService: UserServiceService) {}

  title = 'login';
  user = "";
  pass = "";

  listaUsuariosConLogin: Login[]=[];
  Label_User_Error = "";
  Label_Pass_Error = "";

  ngOnInit() {
    this.userService.todosLosUsuarios().subscribe(data => {
      this.users = data;
      console.log(data);
    });
  }

  clickLogin() {
    this.user = (<HTMLInputElement>document.getElementById("username")).value;
    this.pass = (<HTMLInputElement>document.getElementById("password")).value;

    if (!this.user) {
        this.Label_User_Error = "Por favor, ingrese un usuario";
        return; // Detiene la ejecución si el usuario está vacío
    }

    if (!this.pass) {
        this.Label_Pass_Error = "Por favor, ingrese una contraseña";
        return; // Detiene la ejecución si la contraseña está vacía
    }

    // Llama al servicio de autenticación
    this.userService.loginUsuario(this.user, this.pass).subscribe(
        res => {
            const userId = parseInt(res, 10); // Convierte la respuesta a un número
            if (userId !== -1) { // Asumiendo que el backend devuelve -1 si falla la autenticación
                console.log("Login exitoso:", userId);
                localStorage.setItem('userId', userId.toString()); // Guarda la ID del usuario como string
                console.log(userId)
                this.router.navigate(['MainComponentComponent']); // Navega al componente principal
            } else {
                // Si el usuario no existe o la contraseña es incorrecta
                this.Label_User_Error = "Usuario o contraseña incorrecta";
            }
        },
        err => {
            // Maneja otros posibles errores aquí
            console.error("Error en el login:", err);
            console.log("Estado del error:", err.status); // Imprime el código de estado HTTP
            console.log("Mensaje de error:", err.error); // Imprime el mensaje de error detallado
   
            this.Label_User_Error = "Error al iniciar sesión. Intente nuevamente.";
        }
    );
}


  

}

class Login{
  usuario:string;
  password:string;
  constructor(p1:string,p2:string){
    this.usuario = p1;
    this.password = p2;
  }
}
