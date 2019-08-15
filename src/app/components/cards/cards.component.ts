import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})

export class CardsComponent implements OnInit {
  displayMode = 1;
  myFavorite = false;

@Input() items: any[] = [];

  constructor( private router: Router) { }

  ngOnInit() {
  }
  handleMyFavorite(item: any) {
    if (item.id === true) {
      this.myFavorite = item.id;
    } else {
      return false;
    }
  }

  onDisplayModeChange(mode: number): void {
    this.displayMode  = mode;
  }
  goToArtists(item: any) {
  let artistId;
  if (item.type === 'artist') {
    artistId = item.id;
  } else {
    artistId = item.artists[0].id;
  }
  this.router.navigate(['/artist', artistId]);
  }

  goToArtist(item: any) {
    let artistId;
    if (item.type === 'artist') {
      artistId = item.id;
    } else {
      artistId = item.artists[0].id;
    }
    this.router.navigate(['/artist', artistId]);
    }
}
