import { Component } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { AuthenticationService } from './user/authentication.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private authService: AuthenticationService) {
  }

  get currentUser(): Observable<string> {
    return this.authService.user$;
  }

  ngOnInit() {
  }

}
