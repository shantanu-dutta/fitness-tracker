import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.scss']
})
export class SidenavListComponent implements OnInit {
  @Output() closeSideNav = new EventEmitter<void>();
  isAuth = false;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService.authChange.subscribe(authStatus => (this.isAuth = authStatus));
  }

  onClose() {
    this.closeSideNav.emit();
  }
}
