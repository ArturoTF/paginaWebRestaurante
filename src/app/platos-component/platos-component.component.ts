import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-platos-component',
  templateUrl: './platos-component.component.html',
  styleUrls: ['./platos-component.component.css']
})
export class PlatosComponentComponent {
  constructor(private router: Router) {}
  title = 'paginaPlatos';
  auxplatos = true;
  auxBebidas = true;
  auxExtras = true;
  total = 0;
  platos: productos[] = [{ producto: "Plato", id: 1, img: "https://i.blogs.es/cf2d1e/gambones-horne/1366_2000.jpg", name: "Langostinos de la casa", precio: 5, valoracion: 9 },
  { producto: "Plato", id: 2, img: "https://i.blogs.es/e5733a/carpaccio-de-gambas-pakus-directo-al-paladar/1366_2000.jpg", name: "Carpaccio de gambas", precio: 4.9, valoracion: 10 },
  { producto: "Plato", id: 3, img: "https://i.blogs.es/53e254/pimientos-rellenos-gambas-pakus-directo/1366_2000.jpg", name: "Pimientos rellenos", precio: 7, valoracion: 9.5 },
  { producto: "Plato", id: 4, img: "https://cdn0.recetasgratis.net/es/posts/2/1/9/gambas_al_cava_73912_orig.jpg", name: "Gambas  l cava", precio: 6.9, valoracion: 8 },
  { producto: "Plato", id: 5, img: "https://okdiario.com/img/recetas/2017/12/10/2-1.jpg", name: "Crema de gambas", precio: 4.5, valoracion: 7 },
  { producto: "Plato", id: 6, img: "https://kitchenobsession.files.wordpress.com/2012/08/img_1671.jpg", name: "salpicón de merluza y gambas", precio: 5.5, valoracion: 10 },];

  bebidas: productos[] = [{ producto: "productos", id: 7, img: "https://s4d-images.telepizza.es/Products/Original/Aquarius_Limon_500ml_-2513.png", name: "Acuario", precio: 1, valoracion: 9.75 },
  { producto: "productos", id: 8, img: "data:image/jpeg;base64,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KTp+v2h/9eX5WvuNXu81lCmGM1OpyBwQ1NSt/iQfwT8XkLgB/fN4uPlaanb1p/15flBYVu5ZUzT3wW0KlFs1Nsp9oPiDNSXkhs9f7At41anwzWn0cDg6Z6uEo37SgY+1v61nCp7Q2pbhwF3cY/K3bs+qM5AWcYfbtdsq00UsABdEZmNlCi4BIOgHC151bJ5HYzEOOoUvbWobWA03eVYDulx2jts07KoVAdwFr+wS97HwYp01vq5ALniTb4CV52xM9DTDe/UqS20jtOJUdyT5K08Gp62eowsz2sLdijgJYoiVr3l5xOOalAACAkRE1WUiIhEiIhEiIhEiIhEiIhEiIhEkRjeTeFqtmagubzluje1CDJeIRV39FlX9nWde5rMB7gfaTPUbFqD76nvsR7rmTsTUsaVmVB/8MqDzT4MR8p+HDVf7o/4k/nJ2Jr0bVnEVWq2z6rqymiLG4szLYg9tr6T8o7Ir69VAL+eezuSWaJjoWpiKrybDqHynRfAFvjln63JhG8urUI4qCqg+7N7DLBE2FNo3LElROC5O4WkcyUFzec13b/E5J98loibrCREQiREQiREQiREQiREQiREQiREQiREQiREQiREQiREQiREQiREQiREQiREQiREQiREQiREQi//Z", name: "Nestea", precio: 1, valoracion: 9 },
  { producto: "productos", id: 9, img: "https://www.coca-cola.com/content/dam/onexp/es/es/brand/fanta-v2/es_fanta_naranja_750x750.jpg", name: "Fanta", precio: 1.25, valoracion: 9 },
  { producto: "productos", id: 10, img: "https://www.topdrinks.es/pub/media/catalog/product/1/9/199.jpg", name: "Coca Cola", precio: 1, valoracion: 9 },
  { producto: "productos", id: 11, img: "https://practicas.lucenaempresas.com/wp-content/uploads/2021/05/agua.png", name: "Botella de agua", precio: 0.75, valoracion: 9 },
  { producto: "productos", id: 12, img: "https://escerveza.com/cdn/shop/products/collection-title-escerveza-3-21391431630948.jpg?v=1697406760", name: "Cerveza", precio: 1.5, valoracion: 10 },];


  extras: productos[] = [{ producto: "extras", id: 13, img: "https://i.blogs.es/9eddfa/trufas_cava_frambuesa/1366_2000.jpg", name: "Trufas de cava y frambuesa", precio: 3.99, valoracion: 10 },
  { producto: "extras", id: 14, img: "https://i.blogs.es/72817e/cremaoreo650ma/1366_2000.jpg", name: "Crema de oreo", precio: 4.9, valoracion: 10 },
  { producto: "extras", id: 15, img: "https://i.blogs.es/c87bdd/650_1000_crema-choco-cafe-dap/1366_2000.jpg", name: "Mousse de chocolate negro y café", precio: 7, valoracion: 9 },
  { producto: "extras", id: 16, img: "https://i.blogs.es/828a6e/bizcochoheladotaza650ma/1366_2000.jpg", name: "Bizcocho de helado de chocolate", precio: 6.9, valoracion: 9 },
  { producto: "extras", id: 17, img: "https://i.blogs.es/fab62f/bizcocho_te_matcha/1366_2000.jpg", name: "Bizcocho de té verde", precio: 4.5, valoracion: 7 },
  { producto: "extras", id: 18, img: "https://i.blogs.es/b882af/heladocremosodevainilla_1024_ma/1366_2000.jpg", name: "Helado cremoso de vainilla", precio: 5.5, valoracion: 10 },];

  carritoCompra: productos[] = [];


  ocultarPlatos() {
    if (this.auxplatos == true) {
      this.auxplatos = false;
    } else {
      this.auxplatos = true
    }

  }
  ocultarBebidas() {
    if (this.auxBebidas == true) {
      this.auxBebidas = false;
    } else {
      this.auxBebidas = true
    }
  }
  ocultarExtras() {
    if (this.auxExtras == true) {
      this.auxExtras = false;
    } else {
      this.auxExtras = true
    }
  }
  auxCompra = true;
  carritoBoton() {
    if (this.auxCompra == true) {
      this.auxCompra = false;
    } else {
      this.auxCompra = true
    }
  }

  irMain(){
    this.router.navigate(['MainComponentComponent']);
  }


  anadirProducto(producto: productos) {

    this.total = parseFloat((this.total + producto.precio).toFixed(2));

    this.carritoCompra.push(producto);

  }

  pagar() {
    this.carritoCompra = [];
    this.total = 0;
  }

}

interface productos {
  producto: string,
  id: number,
  img: string,
  name: string,
  precio: number,
  valoracion: number,
}
