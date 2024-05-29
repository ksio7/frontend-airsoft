import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLoggedIn: boolean = false;
  username: string | null = null;
  categories: string[] = [];
  hoverStates: { [key: string]: boolean } = {};

  constructor(private authService: AuthService, private sharedService: SharedService) {}

  ngOnInit(): void {
    this.authService.isLoggedIn$.subscribe(isLoggedIn => {
      this.isLoggedIn = isLoggedIn;
    });

    this.authService.getUsername$.subscribe(username => {
      this.username = username;
    });

    this.sharedService.categories$.subscribe(categories => {
      this.categories = categories;
    });
  }

  toggleHover(menu: string, isHovering: boolean): void {
    this.hoverStates[menu] = isHovering;
  }

  isHovering(menu: string): boolean {
    return this.hoverStates[menu];
  }

  logout(): void {
    this.authService.logout();
  }
}
