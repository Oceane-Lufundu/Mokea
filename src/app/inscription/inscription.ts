import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { App } from "../app";

@Component({
  selector: 'app-inscription',
  imports: [RouterLink, App],
  templateUrl: './inscription.html',
  styleUrl: './inscription.scss',
})
export class Inscription {

}
