import { Component, Input, booleanAttribute } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(
    private router: Router) {
  }

  @Input({ transform: booleanAttribute }) firstSelected!: boolean;
  @Input({ transform: booleanAttribute }) secondSelected!: boolean;
  @Input({ transform: booleanAttribute }) thirdSelected!: boolean;

  logout(): void {
    this.router.navigate(['login']);
  }

  navigateToActivity(): void {
      this.router.navigate(['activity']);
  }

  navigateToProfilePage(): void {
      this.router.navigate(['profile']);
  }

  navigateToBrowse(): void {
      this.router.navigate(['browse']);
  }
}