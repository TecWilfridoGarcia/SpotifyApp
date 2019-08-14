import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './guards/auth.guard.ts/auth.guard.ts.component';
import { LoginComponent } from './login/login.component';
import { SearchComponent } from './components/search/search.component';
import { SpotifyComponent } from './components/spotify/spotify.component';
import { ArtisComponent } from './components/artis/artis.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuard]
},
{
  path: 'search',
  component: SearchComponent,
},
{
  path: 'spotify',
  component: SpotifyComponent,
},
{
  path: 'artist/:id',
  component: ArtisComponent,
},
{
    path: 'login',
    component: LoginComponent
},

// otherwise redirect to home
{ path: '**', redirectTo: '' },
{ path: '', pathMatch: 'full', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
