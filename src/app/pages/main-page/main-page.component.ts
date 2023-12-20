import { Component } from '@angular/core';
import {NavbarComponentComponent} from "../../components/navbar-component/navbar-component.component";
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [
    NavbarComponentComponent,
    RouterOutlet
  ],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {

}