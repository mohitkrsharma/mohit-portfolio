import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {MenubarModule} from 'primeng/menubar';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {SidebarModule} from 'primeng/sidebar';
import {Button} from 'primeng/button';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [MenubarModule, CommonModule, HttpClientModule, SidebarModule, Button],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent implements OnInit {
  items: any;
  currentSelection: any;
  @ViewChild('myElement', {static: false}) myElementRef: ElementRef | undefined
  disp: any;
  sidebarVisible: boolean = false;
  constructor() {
  }

  ngOnInit(): void {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-home'
      },
      {
        label: 'About Me',
        icon: 'pi pi-star'
      },
      {
        label: 'Skills',
        icon: 'pi pi-search',
      },
      {
        label: 'Contact',
        icon: 'pi pi-envelope'
      }
    ]
    this.currentSelection = 'Home';
    this.disp = false;
  }


  changeSelection(item: any) {
    switch (item.label) {
      case 'Home':
        this.currentSelection = 'Home';
        this.closeSidebar();
        break
      case 'About Me':
        this.currentSelection = 'About Me';
        this.closeSidebar();
        break
      case 'Skills':
        this.currentSelection = 'Skills';
        this.closeSidebar();
        break;
      case 'Contact':
        this.currentSelection = 'Contact';
        this.closeSidebar();
        break
      default:
        this.closeSidebar();
        break;
    }
  }

  openPDF() {
    debugger;
    window.open('https://mohitkrsharma.github.io/resume/', '_blank');
  }

  openSocialMedia(selectedOpt: string) {
    switch (selectedOpt) {
      case 'instagram':
        window.open('https://www.instagram.com/mohitsharma_mp', '_blank');
        break;
      case 'facebook':
        window.open('https://www.facebook.com/mohit.sharma.921?mibextid=LQQJ4d', '_blank');
        break;
      case 'linkedin':
        window.open('https://www.linkedin.com/in/mohitkumarsharma1', '_blank');
        break;
      case 'github':
        window.open('https://github.com/mohitkrsharma', '_blank');
        break;
      default:
        break;
    }
  }

  toggleSideBar() {
    this.disp = !this.disp;
  }

  openSidebar() {
    (<HTMLElement>document.getElementById("sidebar")).style.left = "0";
  }

  closeSidebar() {
    (<HTMLElement>document.getElementById("sidebar")).style.left = "-250px"; // Hide sidebar offscreen
  }

}
