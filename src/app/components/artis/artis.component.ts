import { Component, Input, ElementRef, Renderer } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artis',
  templateUrl: './artis.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtisComponent {

  artist: any = {};
  topTracks: any[] = [];

  constructor(private router: ActivatedRoute, private spotify: SpotifyService, public element: ElementRef, public renderer: Renderer) {
   this.router.params.subscribe(params => {
      // tslint:disable-next-line:no-string-literal
     this.getArtist( params['id']);
      // tslint:disable-next-line:no-string-literal
     this.getTopTracks( params['id']);
    });
   }
   getArtist( id: string) {
    this.spotify.getArtist(id)
     .subscribe( artist => {
      this.artist = artist;
     });
   }
   goToBack() {
     window.history.back();
   }
   getTopTracks( id: string ) {
    this.spotify.getTopTracks( id )
    .subscribe( topTracks => {
      console.log(topTracks);
      this.topTracks = topTracks;
    });
   }
}
