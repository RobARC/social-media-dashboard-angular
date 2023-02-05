import { Component } from '@angular/core';
import { CardSmall } from 'src/models/card-small-model';

@Component({
  selector: 'app-card-small-list',
  templateUrl: './card-small-list.component.html',
  styleUrls: ['./card-small-list.component.css']
})
export class CardSmallListComponent {

  cardSmallList: CardSmall[] = [
    {
      id: 1,
      title: 'Page Views',
      socialIcon: './assets/icon-facebook.svg',
      number: '87',
      percentage: 2,
      percentageIcon: './assets/icon-up.svg',
      class: '',
    },
    {
      id: 2,
      title: 'Likes',
      socialIcon: './assets/icon-facebook.svg',
      number: '52',
      percentage: 3,
      percentageIcon: './assets/icon-down.svg',
      class: 'danger',
    },
    {
      id: 3,
      title: 'Likes',
      socialIcon: './assets/icon-instagram.svg',
      number: '5462',
      percentage: 2257,
      percentageIcon: './assets/icon-up.svg',
      class: '',
    },
    {
      id: 4,
      title: 'Profile Views',
      socialIcon: './assets/icon-instagram.svg',
      number: '52k',
      percentage: 1375,
      percentageIcon: './assets/icon-up.svg',
      class: '',
    },
    {
      id: 5,
      title: 'Retweets',
      socialIcon: './assets/icon-twitter.svg',
      number: '117',
      percentage: 303,
      percentageIcon: './assets/icon-up.svg',
      class: '',
    },
    {
      id: 6,
      title: 'Likes',
      socialIcon: './assets/icon-twitter.svg',
      number: '507',
      percentage: 553,
      percentageIcon: './assets/icon-up.svg',
      class: '',
    },
    {
      id: 7,
      title: 'Likes',
      socialIcon: './assets/icon-youtube.svg',
      number: '107',
      percentage: 19,
      percentageIcon: './assets/icon-down.svg',
      class: 'danger',
    },
    {
      id: 8,
      title: 'Total Views',
      socialIcon: './assets/icon-youtube.svg',
      number: '1407',
      percentage: 12,
      percentageIcon: './assets/icon-down.svg',
      class: 'danger',
    },
  ];
}
