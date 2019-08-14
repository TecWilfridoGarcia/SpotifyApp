import { Component } from '@angular/core';
import { first } from 'rxjs/operators';
import { User } from '../models/user';
import { UserService } from '../services/user.services';

@Component({ templateUrl: 'home.component.html' })
export class HomeComponent {
    users: User[] = [];

    constructor(private userService: UserService) {
     }

    // tslint:disable-next-line:use-lifecycle-interface
    ngOnInit(e) {
        this.userService.getAll().pipe(first()).subscribe(users => {
            this.users = users;
        });
        e.preventDefault();
    }
}
