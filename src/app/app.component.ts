import { Component, OnInit } from '@angular/core';
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
      link: '/pages/home',
    },
    {
      label: 'Layout Variations',
      items: [
        {
          label: 'Default',
          link: '/pages/layout-variations/demo-one',
        },
        {
          label: 'Work with Colours',
          link: '/pages/layout-variations/demo-two'
        },
        {
          label: 'Change with background',
          link: '/pages/layout-variations/demo-three'
        }
      ]
    },
    {
      label: 'Configurations',
      items: [
        {
          label: 'Add/Remove Padding',
          link: '/pages/more-configuration/disable-padding',
        },
        {
          label: 'Enable/Disable Routing',
          link: '/pages/more-configuration/disable-routing',
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

  constructor() { }

  ngOnInit() {}
}
