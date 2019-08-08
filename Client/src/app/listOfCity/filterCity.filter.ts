import {Pipe, PipeTransform} from '@angular/core';
import { ICity } from './citylist.model';

@Pipe({
    name: 'serachCity'
})

export class SerachCityPipe implements PipeTransform {
    transform(value: ICity[], filterBy: string) {
        filterBy = filterBy ? filterBy.toLowerCase() : null;
        return filterBy ? value.filter((city: ICity) =>
            (city.Country.toLowerCase().indexOf(filterBy) !== -1)) : value;
    }
}
