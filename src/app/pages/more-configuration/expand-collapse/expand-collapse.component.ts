import { Component, OnInit } from '@angular/core';

@Component({
  selector: "app-expand-collapse",
  templateUrl: "./expand-collapse.component.html",
  styleUrls: ["./expand-collapse.component.css"],
})
export class ExpandCollapseComponent implements OnInit {
  expandCollapseStatus = null;
  appitems = [
    {
      label: "Item 1 (with Font awesome icon)",
      faIcon: "fab fa-500px",
      items: [
        {
          label: "Item 1.1",
          faIcon: "fab fa-accusoft",
        },
        {
          label: "Item 1.2",
          faIcon: "fab fa-accessible-icon",
          items: [
            {
              label: "Item 1.2.1",
              faIcon: "fas fa-allergies",
            },
            {
              label: "Item 1.2.2",
              faIcon: "fas fa-ambulance",
              items: [
                {
                  label: "Item 1.2.2.1",
                  faIcon: "fas fa-anchor",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      label: "Item 2",
      icon: "alarm",
      items: [
        {
          label: "Item 2.1",
          icon: "favorite",
        },
        {
          label: "Item 2.2",
          icon: "favorite_border",
        },
      ],
    },
    {
      label: "Item 3",
      icon: "offline_pin",
    },
    {
      label: "Item 4",
      icon: "star_rate",
      hidden: true,
    },
  ];
  constructor() {}

  ngOnInit(): void {}

  setExpandCollapseStatus(type) {
    this.expandCollapseStatus = type;
  }

  selectedItem(menu) {
    console.log(menu);
  }
}
