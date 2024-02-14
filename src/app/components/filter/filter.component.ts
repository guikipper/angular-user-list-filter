import { Component, EventEmitter, Output } from '@angular/core';
import { IFilterOptions
 } from '../../interfaces/filter.interface';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss'
})
export class FilterComponent {
  filterOptions: IFilterOptions = {
    name: '',
    startDate: undefined,
    endDate: undefined,
    status: true
  }

  @Output() sendFilterOptions = new EventEmitter<IFilterOptions>()

  statusList = [
    {
      description: 'Ativo',
      status: true,
    },
    {
      description: 'Inativo',
      status: false,
    }
  ]

  filterUsers() {
    console.log('As opções do filtro: ',this.filterOptions)
    this.sendFilterOptions.emit(this.filterOptions)
  }

}
