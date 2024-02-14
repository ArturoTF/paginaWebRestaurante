import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.css']
})
export class MainComponentComponent {
constructor(private router: Router) {}

  irAComponenteB() {
    this.router.navigate(['PlatosComponentComponent']);
  }

  irALogin(){
    this.router.navigate(['LoginComponentComponent']);
  }
  irACategories(){
    this.router.navigate(['categoriesComponentComponent']);
  }
  irAAccound(){
    this.router.navigate(['accoundComponentComponent']);
  }



  imagenes: string[] = [
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2F474x%2F82%2F72%2F07%2F827207611d64395175f2e497a817ba5a--american-food-restaurant.jpg&f=1&nofb=1&ipt=d7e9350c4ac348254e502d08089fb500b633538aa8f4fa3c709da909c7b480a0&ipo=images",
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.6lp1EBpvWRSeCo4xbyYnAgHaFj%26pid%3DApi&f=1&ipt=93da917f0616068b5f60ed2c26c8b47b766a6af20b47f473884807708e5dfa0e&ipo=images",
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.zrc3laGyq6__MjxGH96WPAHaFj%26pid%3DApi&f=1&ipt=4acaae8bae9d26cbb2e6755ae72279a2334a6e7a07495d6955c85829256b3506&ipo=images",
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.H2mOkYz-xnRyCHbeF-0ZbAAAAA%26pid%3DApi&f=1&ipt=7b4ef2b04a7513ad0749ee95dd9e1388f413192c4304482136c33e1f348179a2&ipo=images"
  ];

  imageElement: HTMLImageElement | null = document.getElementById("image") as HTMLImageElement;
  currentIndex: number = 0;

  languageSelectElement = document.getElementById('desplegable-select') as HTMLSelectElement | null;



  changeImage(): void {
    if (this.imageElement) {
      this.imageElement.src = this.imagenes[this.currentIndex];
      this.currentIndex = (this.currentIndex + 1) % this.imagenes.length;
    }
  }

  intervalId = setInterval(() => {
    this.changeImage();
  }, 3000);
}
