import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  photos = [{
    url: "http://s2.glbimg.com/qhJo_3UUb0jOQ7yKS1p1h5J5Z48=/e.glbimg.com/og/ed/f/original/2015/05/20/toyota-supra-frente.jpg";
    description:"Supra"
  },
  {
    url:"https://img.olx.com.br/images/00/009826089049450.jpg",
    description:"Nissan370Z"
  }
  ];
}
