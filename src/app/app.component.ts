import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Mike\'s Prtfolio';

  ngOnInit(): void {
	AOS.init({
		mirror: true
	  })
  }

  lnClick() {
	window.open('https://www.linkedin.com/in/michail-chatzipanagiotou', '_blank')
  }

  ghClick(ghLink: string) {
	window.open('https://github.com/mikechatzis' + ghLink, '_blank')
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
