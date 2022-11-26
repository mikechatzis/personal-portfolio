import { AfterViewInit, Component, DoCheck, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import * as AOS from 'aos';

@Component({
  standalone: true,
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
})
export class LandingPageComponent implements OnInit {

  constructor() { }

  observer = new IntersectionObserver((entries, observer) => { entries.forEach((entry) => { if (entry.isIntersecting) { AOS.refresh(); } }); });
  
  ngOnInit(): void {
	  AOS.init({
		  mirror: true,
		})
	}
}
