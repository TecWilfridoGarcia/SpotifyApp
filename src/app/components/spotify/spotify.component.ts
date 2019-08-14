import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-spotify',
  templateUrl: './spotify.component.html',
  styleUrls: ['./spotify.component.css']
})
export class SpotifyComponent implements OnInit {
  newSingles: any [] = [];
  filteredUsers: any;
  artists: any;

  constructor( private spotifyService: SpotifyService) {
   }
   filters = {};
   filterPost = '';

  ngOnInit() {
    this.allNewReleases();
  }
  allNewReleases() {
    this.spotifyService.getNewRealeses()
     .subscribe( (data: any) => {
       this.newSingles = data;
     });
  }
  searchTitle(term: string) {
    const nombreArr: any[] = [];
    for (const artist of this.artists) {
      const title: string = artist.name.toLocaleLowerCase();
      if (title.indexOf(term) !== 1) {
        nombreArr.push(artist);
      }
    }

}
}
