import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {}
  getQuery( query: string) {
   const url = `https://api.spotify.com/v1/${query}`;

   const  headers = new HttpHeaders({
    // tslint:disable-next-line:object-literal-key-quotes
    'Authorization': 'Bearer BQAeCz6JDqH25rjX0tpuS63_4FHzyMV4Euzis50Mn1Syvt_M7IdxbqFaCuwNxj9to-LXRexPt7kSmEVj4PY'
  });
   return this.http.get(url, {headers});
  }
  getNewRealeses() {
    return this.getQuery('browse/new-releases')
    // tslint:disable-next-line:no-string-literal
    .pipe(map(data =>  data['albums'].items));
  }
  getArtists(term: string) {
    return this.getQuery(`search?q=${ term }&type=artist&limit=15`)
      // tslint:disable-next-line:no-string-literal
      .pipe(map(data => data['artists'].items));
  }
  getArtist(id: string) {
    return this.getQuery(`artists/${ id }`);
  }
  getTopTracks(id: string) {
    return this.getQuery(`artists/${ id }/top-tracks?country=us`)
    // tslint:disable-next-line:no-string-literal
  .pipe(map(data => data['tracks']));
  }

}
