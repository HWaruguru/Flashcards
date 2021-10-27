import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './flashcard-service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Flashcards';
  currentUser: any = null;

  constructor(private authService: AuthService, private router: Router) { 
    this.authService.currentUser.subscribe(x => this.currentUser = x);
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  ngOnInit(): void {
  }
}