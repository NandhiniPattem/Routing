import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name:'kelvin'
})

export class kelvinPipe implements PipeTransform {
    transform(value: any): any {
        return value - 273.15;
    }
}