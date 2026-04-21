import { Component } from '@angular/core';

@Component({
  selector: 'app-home-component',
  imports: [],
  templateUrl: './home-component.html',
  styleUrl: './home-component.css',
})
export class HomeComponent {
  showMobileNav = false;

  toggleMobileNav(): void {
    this.showMobileNav = !this.showMobileNav;
  }

  onNavItemClick(event: Event): void {
    if (!this.showMobileNav) return;
    const target = event.target as HTMLElement;
    const anchor = target.closest && target.closest('a');
    if (anchor) {
      this.showMobileNav = false;
    }
  }

}
