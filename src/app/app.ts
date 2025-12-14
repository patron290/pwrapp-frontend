import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CompetitorList } from './competitor-list/competitor-list';

@Component({
  selector: 'app-root',
  imports: [CompetitorList, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('pwrapp-frontend');
}
