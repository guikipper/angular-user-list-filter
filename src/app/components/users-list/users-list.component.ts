import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IUser } from '../../interfaces/user/user.interface';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss'
})
export class UsersListComponent {
  @Input({required: true}) usersList: IUser[] = []
  displayedColumns: string[] = ['name', 'date', 'status'];

  @Output() sendUserId = new EventEmitter<IUser>()
  
  onSelectedUser(user: IUser) {
    this.sendUserId.emit(user)
  }
}
