import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mike\'s Prtfolio';

  lnClick() {
	window.open('https://www.linkedin.com/in/michail-chatzipanagiotou', '_blank')
  }

  ghClick() {
	window.open('https://github.com/mikechatzis', '_blank')
  }

  trncClick() {
	window.open('https://github.com/mikechatzis/ft_transcendence', '_blank')
  }

  prtfioClick() {
	window.open('https://github.com/mikechatzis/personal-portfolio', '_blank')
  }

  cntnrsClick() {
	window.open('https://github.com/mikechatzis/ft_containers', '_blank')
  }

  constructor (
	private domSanitizer: DomSanitizer,
	private matIconregistry: MatIconRegistry,
  ) {
	this.matIconregistry.addSvgIcon('linkedin', 
		this.domSanitizer.bypassSecurityTrustResourceUrl(('../../assets/images/SVG/linkedin.svg')))
	this.matIconregistry.addSvgIcon('github', 
		this.domSanitizer.bypassSecurityTrustResourceUrl(('../../assets/images/SVG/github.svg')))
  }
}
