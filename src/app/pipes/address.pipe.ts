import { Pipe, PipeTransform } from '@angular/core';
import { IAddress } from '../interfaces/user/address.interface';

@Pipe({
  name: 'address'
})
export class AddressPipe implements PipeTransform {

  transform(address: IAddress): string {
    const INVALID_ADDRESS = !address || !address.cidade || !address.estado || !address.pais || !address.rua || address.numero == null || address.numero == undefined 

    if(INVALID_ADDRESS) {
      return 'Endereço indisponível ou inválido.'
    } else {
      return `${address.rua}, ${address.numero} - ${address.cidade}, ${address.estado} - ${address.pais}`
    }
  }

}
