import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/features/navbar/navbar.component';
import { FooterComponent } from './components/features/footer/footer.component';
import { LeftMenuComponent } from './components/features/left-menu/left-menu.component';
import { RightMenuComponent } from './components/features/right-menu/right-menu.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    NavbarComponent,
    LeftMenuComponent,
    RightMenuComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular19';
}
