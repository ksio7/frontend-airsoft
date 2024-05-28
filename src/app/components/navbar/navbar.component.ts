<<<<<<< Updated upstream
import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../services/shared.service';
=======
import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
>>>>>>> Stashed changes

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
<<<<<<< Updated upstream
export class NavbarComponent implements OnInit {

  categories: string[] = [];

  constructor(private sharedService: SharedService) { }

  ngOnInit(): void {
    this.sharedService.categories$.subscribe(categories => {
      this.categories = categories;
    });
=======
export class NavbarComponent {
  isLoggedIn!: boolean;

  constructor(private authService: AuthService, private router: Router) {
    this.authService.isLoggedIn.subscribe(status => this.isLoggedIn = status);
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
>>>>>>> Stashed changes
  }
}
