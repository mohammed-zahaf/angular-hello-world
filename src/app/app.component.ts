import { Component } from '@angular/core';
import { HomeComponent } from "./home/home.component";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [ HomeComponent ],
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hello-world';
}
