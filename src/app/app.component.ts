import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SearchComponent } from "./search/search.component";
import { TableComponent } from './table/table.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { LeftNavComponent } from "./left-nav/left-nav.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SearchComponent, TableComponent, TopNavComponent, LeftNavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'AngularTest';
}
