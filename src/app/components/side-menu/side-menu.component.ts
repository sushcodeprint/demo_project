import { Component, OnInit } from '@angular/core';
declare const $: any;
@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {
  
  isLeftMenu: boolean = false ;
  constructor() { }

  ngOnInit(): void {

 
  
      

}

collapseSide() {
  this.isLeftMenu = !this.isLeftMenu;
  // $('#sidebar,#routeContent').hasClass('sidebar-collapsed')
  //   ? $('#sidebar,#routeContent,.hamburger,#actionItemsSubmenu').removeClass(
  //       'sidebar-collapsed'
  //     )
  //   : $('#sidebar,#routeContent,.hamburger,#actionItemsSubmenu').addClass(
  //       'sidebar-collapsed'
  //     );

  $('#sidebar,#routeContent,.hamburger,#actionItemsSubmenu').toggleClass('sidebar-collapsed')

    }

}