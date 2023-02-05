import { Component } from '@angular/core';
import { Card } from 'src/models/card.model';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent {
  cardList: Card[] = [
    {
      id: 1,
      userName: '@RoberthR',
      social: 'facebook',
      socialIcon: './assets/icon-facebook.svg',
      number: '1987',
      today: '12',
      todayIcon: './assets/icon-up.svg'
    },
    {
      id: 2,
      userName: '@SofiaR',
      social: 'twitter',
      socialIcon: './assets/icon-twitter.svg',
      number: '1044',
      today: '99',
      todayIcon: './assets/icon-up.svg'
    },
    {
      id: 3,
      userName: '@RichardR',
      social: 'instagram',
      socialIcon: './assets/icon-instagram.svg',
      number: '11k',
      today: '1099',
      todayIcon: './assets/icon-up.svg'
    },
    {
      id: 4,
      userName: '@JohnnyR',
      social: 'youtube',
      socialIcon: './assets/icon-youtube.svg',
      number: '8239',
      today: '144',
      todayIcon: './assets/icon-up.svg'
    },
  ];
}
