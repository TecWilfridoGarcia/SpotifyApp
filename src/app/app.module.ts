import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { JwtInterceptor } from './helpers/jwt.interceptor';
import { ErrorInterceptor } from './helpers/error.interceptor';
import { fakeBackendProvider } from './helpers/fake-backend';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SearchComponent } from './components/search/search.component';
import { ArtisComponent } from './components/artis/artis.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SpotifyComponent } from './components/spotify/spotify.component';
import { FilterPipe } from './pipes/filter.pipe';
import { NoImgPipe } from './pipes/no-img.pipe';
import { CardsComponent } from './components/cards/cards.component';
import { DomseguroPipe } from './pipes/domseguro.pipe';

@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        AppRoutingModule,
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        LoginComponent,
        DashboardComponent,
        SearchComponent,
        ArtisComponent,
        NavbarComponent,
        SpotifyComponent,
        FilterPipe,
        NoImgPipe,
        DomseguroPipe,
        CardsComponent,
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

        // provider used to create fake backend
        fakeBackendProvider
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }
