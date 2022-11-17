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

  cubClick() {
	window.open('https://github.com/mikechatzis/cub3d', '_blank')
  }

  shellClick() {
	window.open('https://github.com/mikechatzis/Minishell', '_blank')
  }

  talkClick() {
	window.open('https://github.com/mikechatzis/minitalk', '_blank')
  }

  downloadCV() {
		const link = document.createElement('a');
		link.setAttribute('target', '_self');
		link.setAttribute('href', '../../assets/Michail_Chatzipanagiotou_FullCV.pdf');
		link.setAttribute('download', `Michail_Chatzipanagiotou_fullCV.pdf`);
		document.body.appendChild(link);
		link.click();
		link.remove();
	}	

  constructor (
	private domSanitizer: DomSanitizer,
	private matIconregistry: MatIconRegistry,
  ) {
	this.matIconregistry.addSvgIcon('linkedin', 
		this.domSanitizer.bypassSecurityTrustResourceUrl(('../../assets/images/SVG/linkedin.svg')))
	this.matIconregistry.addSvgIcon('github', 
		this.domSanitizer.bypassSecurityTrustResourceUrl(('../../assets/images/SVG/github.svg')))
	this.matIconregistry.addSvgIcon('cv', 
		this.domSanitizer.bypassSecurityTrustResourceUrl(('../../assets/images/SVG/cv.svg')))
  }
}
