import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgClass],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  links: Array<string> = ['Home', 'TodoList App', 'Generations', 'Pokemons' ,'Admin']
  isAdmin: boolean = true
}
