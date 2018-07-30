import { Component, OnInit } from '@angular/core';

import { Router, NavigationEnd } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  selectedData = null;
  showHome = true;

  appItems = [
    {
      label: 'Home',
      link: '/',
    },
    {
      label: 'Layout Variations',
      items: [
        {
          label: 'Default',
          link: '/pages/layout-variations/layout-variations/demo-one',
        },
        {
          label: 'Work with Colours',
          link: '/pages/layout-variations/layout-variations/demo-two'
        },
        {
          label: 'Change with background',
          link: '/pages/layout-variations/layout-variations/demo-three'
        }
      ]
    },
    {
      label: 'Configurations',
      items: [
        {
          label: 'Add/Remove Padding',
          link: '/pages/more-configuration/more-configuration/disable-padding',
        },
        {
          label: 'Enable/Disable Routing',
          link: '/pages/more-configuration/more-configuration/disable-routing',
        }
      ]
    }
  ];

  config = {
    paddingAtStart: false,
    interfaceWithRoute: true
  };

  selectedItem(selectedData) {
    console.log(selectedData);
    this.selectedData = selectedData;
  }

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.router.events
      .subscribe((event) => {
        if (event instanceof NavigationEnd) {
          if (event.url === '/') {
            this.showHome = true;
          } else {
            this.showHome = false;
          }
        }
      });
  }

}
