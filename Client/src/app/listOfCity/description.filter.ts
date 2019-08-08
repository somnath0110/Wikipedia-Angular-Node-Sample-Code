import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'trimword'
})

export class TrimPipe implements PipeTransform {
    transform(value: string) {
        value = value.substr(0, 250) + '...';
        return value;
    }
}
