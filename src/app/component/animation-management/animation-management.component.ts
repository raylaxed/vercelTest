import { Component, OnInit, PLATFORM_ID, Inject } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { DomSanitizer, SafeResourceUrl, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-animation-management',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './animation-management.component.html',
  styleUrl: './animation-management.component.css'
})
export class AnimationManagementComponent implements OnInit {
  videoUrl1: SafeResourceUrl;
  videoTitle1 = 'Masters of Dirt Show-Opener Tour 2019';
  videoDescription1 = 'This project has a soft spot in my heart. This was the first group project I leeded. Just a small team of 5 talented people. Everything that could go wrong did go wrong. But we made it through and I learned a lot about leading.';
  
  videoUrl2: SafeResourceUrl;
  videoTitle2 = '3D-Printed Salmon by Revo Foods';
  videoDescription2 = 'In this project i learned a lot about communication with the client, a lot of revisions and feedback loops where nessesary until the clients needs where satisfied. Good work Takes time! The Video did good, the marketing team told me it gave the technical "AHA-Moment" for potential investors, also it reached over half a million people.';  articleUrl = 'https://nypost.com/2023/09/19/3d-printed-salmon-is-now-on-the-market-what-is-it-made-from/';
  companyUrl = 'https://revo-foods.com/de/';
  
  videoUrl3: SafeResourceUrl;
  videoTitle3 = 'Simple 2D Animation - A simple Bumper';
  videoDescription3 = 'This was a simple project for School. Just to show that my 2D skills are good as well.';
  
  instagramEmbed1: SafeHtml;
  instagramEmbed2: SafeHtml;
  instagramDescription = 'This project was some CGI for "Keinen Schritt zurück!", directed by Veselý Marek. It was cheaper to fake the train in 3D than to rent it, get a drone operator or helicopter. Same for the Car. I worked on this project with a good friend of mine.';
  imdbUrl = 'https://www.imdb.com/title/tt15481816/';
  wikiUrl = 'https://de.wikipedia.org/wiki/Keinen_Schritt_zur%C3%BCck!';
  directorWikiUrl = 'https://de.wikipedia.org/wiki/Vesel%C3%BD_Marek';
  directorWebsiteUrl = 'https://www.veselyfilms.com/';

  constructor(
    private sanitizer: DomSanitizer,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    const youtubeEmbedUrl1 = 'https://www.youtube.com/embed/DIrVyhQ8L_A';
    this.videoUrl1 = this.sanitizer.bypassSecurityTrustResourceUrl(youtubeEmbedUrl1);
    
    const youtubeEmbedUrl2 = 'https://www.youtube.com/embed/A3DsDPa5HRs';
    this.videoUrl2 = this.sanitizer.bypassSecurityTrustResourceUrl(youtubeEmbedUrl2);
    
    const youtubeEmbedUrl3 = 'https://www.youtube.com/embed/j00T73tFiVU';
    this.videoUrl3 = this.sanitizer.bypassSecurityTrustResourceUrl(youtubeEmbedUrl3);
    
    // First Instagram embed code (post)
    const instagramEmbedCode1 = `
      <blockquote 
        class="instagram-media" 
        data-instgrm-permalink="https://www.instagram.com/p/CmwZoijK5ky/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
        data-instgrm-version="14"
        style="background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);">
      </blockquote>
    `;
    
    // Second Instagram embed code (post)
    const instagramEmbedCode2 = `
      <blockquote 
        class="instagram-media" 
        data-instgrm-permalink="https://www.instagram.com/p/CnFVRo_KcmY/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
        data-instgrm-version="14"
        style="background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);">
      </blockquote>
    `;
    
    this.instagramEmbed1 = this.sanitizer.bypassSecurityTrustHtml(instagramEmbedCode1);
    this.instagramEmbed2 = this.sanitizer.bypassSecurityTrustHtml(instagramEmbedCode2);
  }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.loadInstagramEmbedScript();
    }
  }

  private loadInstagramEmbedScript() {
    if (!document.querySelector('script[src="//www.instagram.com/embed.js"]')) {
      const script = document.createElement('script');
      script.async = true;
      script.src = '//www.instagram.com/embed.js';
      document.body.appendChild(script);
    }
  }
}
