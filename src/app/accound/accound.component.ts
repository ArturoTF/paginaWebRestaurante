import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../services/user-service.service';


@Component({
  selector: 'app-accound',
  templateUrl: './accound.component.html',
  styleUrls: ['./accound.component.css']
})
export class AccoundComponent implements OnInit{

  userId: string | null = null;
  userName: string | null = null; 

  constructor(private userService: UserServiceService) {}

  ngOnInit() {
    this.userId = localStorage.getItem('userId');
    console.log(this.userId)
    if (this.userId) {
      this.userService.getUserdata(this.userId).subscribe(
        (userData) => {
          console.log('Datos del usuario:', userData);
          this.userName = userData.nombre; // Asegúrate de que 'name' sea la propiedad correcta
          console.log(this.userName)
          
        },
        (error) => {
          console.error('Error al obtener los detalles del usuario:', error);
        }
      );
    }
  }


  
}
