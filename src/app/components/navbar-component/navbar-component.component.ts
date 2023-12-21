import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive} from "@angular/router";
import {store} from "../../models/store.model";
import {Store} from "@ngrx/store";
import {logOut} from "../../shared/store/actions";

@Component({
  selector: 'app-navbar-component',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './navbar-component.component.html',
  styleUrl: './navbar-component.component.css'
})
export class NavbarComponentComponent {
  constructor(private store: Store<{States: store}>) {
  }
  onLogoutClicked() {
    this.store.dispatch(logOut())
  }
}
