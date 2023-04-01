import { Component, OnInit } from '@angular/core';

interface Attribute {
  name: string,
  imageUrl: string
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  public four_star_characters: Attribute[] = [  
    { 
      name: 'Arlan', 
      imageUrl: '../../../assets/images/characters/icons/Arlan.png' 
    }, { 
      name: 'Asta', 
      imageUrl: '../../../assets/images/characters/icons/Asta.png' 
    }, { 
      name: 'Dan Heng', 
      imageUrl: '../../../assets/images/characters/icons/Dan_Heng.png' 
    }, { 
      name: 'Herta', 
      imageUrl: '../../../assets/images/characters/icons/Herta.png' 
    }, { 
      name: 'Hook', 
      imageUrl: '../../../assets/images/characters/icons/Hook.png' 
    }, { 
      name: 'March 7th', 
      imageUrl: '../../../assets/images/characters/icons/March_7th.png' 
    }, { 
      name: 'Natasha', 
      imageUrl: '../../../assets/images/characters/icons/Natasha.png' 
    }, { 
      name: 'Pela', 
      imageUrl: '../../../assets/images/characters/icons/Pela.png' 
    }, { 
      name: 'Qingque', 
      imageUrl: '../../../assets/images/characters/icons/Qingque.png' 
    }, { 
      name: 'Sampo', 
      imageUrl: '../../../assets/images/characters/icons/Sampo.png' 
    }, { 
      name: 'Serval', 
      imageUrl: '../../../assets/images/characters/icons/Serval.png' 
    }, { 
      name: 'Sushang', 
      imageUrl: '../../../assets/images/characters/icons/Sushang.png' 
    }, { 
      name: 'Tingyun', 
      imageUrl: '../../../assets/images/characters/icons/Tingyun.png' 
    }]
  
  public five_star_characters: Attribute[] = [  
    { 
      name: 'Bailu', 
      imageUrl: '../../../assets/images/characters/icons/Bailu.png' 
    }, { 
      name: 'Blade', 
      imageUrl: '../../../assets/images/characters/icons/Blade.png' 
    }, { 
      name: 'Bronya', 
      imageUrl: '../../../assets/images/characters/icons/Bronya.png' 
    }, { 
      name: 'Clara', 
      imageUrl: '../../../assets/images/characters/icons/Clara.png' 
    }, { 
      name: 'Fu Xuan', 
      imageUrl: '../../../assets/images/characters/icons/Fu_Xuan.png' 
    }, { 
      name: 'Gepard', 
      imageUrl: '../../../assets/images/characters/icons/Gepard.png' 
    }, { 
      name: 'Himeko', 
      imageUrl: '../../../assets/images/characters/icons/Himeko.png' 
    }, { 
      name: 'Jing Yaun', 
      imageUrl: '../../../assets/images/characters/icons/Jing_Yuan.png' 
    }, { 
      name: 'Kafka', 
      imageUrl: '../../../assets/images/characters/icons/Kafka.png' 
    }, { 
      name: 'Luocha', 
      imageUrl: '../../../assets/images/characters/icons/Luocha.png' 
    }, { 
      name: 'Seele', 
      imageUrl: '../../../assets/images/characters/icons/Seele.png' 
    }, { 
      name: 'Silver Wolf', 
      imageUrl: '../../../assets/images/characters/icons/Silver_Wolf.png' 
    }, { 
      name: 'Trailblazer', 
      imageUrl: '../../../assets/images/characters/icons/Trailblazer.png' 
    }, { 
      name: 'Welt', 
      imageUrl: '../../../assets/images/characters/icons/Welt.png' 
    }, { 
      name: 'Yanqing', 
      imageUrl: '../../../assets/images/characters/icons/Yanqing.png' 
    }]

  
  public elements: Attribute[] = [
    {
      name: 'Physical',
      imageUrl: "../../../assets/images/elements/Physical.webp"
    }, {
      name: 'Fire',
      imageUrl: "../../../assets/images/elements/Fire.webp"
    }, {
      name: 'Ice',
      imageUrl: "../../../assets/images/elements/Ice.webp"
    }, {
      name: 'Lightning',
      imageUrl: "../../../assets/images/elements/Lightning.webp"
    }, {
      name: 'Wind',
      imageUrl: "../../../assets/images/elements/Wind.webp"
    }, {
      name: 'Quantum',
      imageUrl: "../../../assets/images/elements/Quantum.webp"
    }, {
      name: 'Imaginary',
      imageUrl: "../../../assets/images/elements/Imaginary.webp"
    }]

  public paths: Attribute[] = [
    {
      name: 'The Destruction',
      imageUrl: "../../../assets/images/paths/The_Destruction.webp"
    }, {
      name: 'The Hunt',
      imageUrl: "../../../assets/images/paths/The_Hunt.webp"
    }, {
      name: 'The Erudition',
      imageUrl: "../../../assets/images/paths/The_Erudition.webp"
    }, {
      name: 'The Harmony',
      imageUrl: "../../../assets/images/paths/The_Harmony.webp"
    }, {
      name: 'The Nihility',
      imageUrl: "../../../assets/images/paths/The_Nihility.webp"
    }, {
      name: 'The Preservation',
      imageUrl: "../../../assets/images/paths/The_Preservation.webp"
    }, {
      name: 'The Abundance',
      imageUrl: "../../../assets/images/paths/The_Abundance.webp"
    }]

  constructor() { }

  ngOnInit(): void {
  }

}
