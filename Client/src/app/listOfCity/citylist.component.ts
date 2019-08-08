import { Component, OnInit } from '@angular/core';

import {ICity} from './citylist.model';
import { CityListService } from './citylist.service';

@Component({
    templateUrl: './citylist.component.html'
})

export class CityComponent implements OnInit {

    constructor(private _CityListService: CityListService) {}

    cityList: ICity[];
    cityDetailData: String = 'loading....' ;

    ngOnInit(): void {
        this._CityListService.getCityList()
            .subscribe((data) => this.cityList = data);
    }

    cityDetail(event): void {
        this._CityListService.getCityDetails(event)
            .subscribe((data) => this.cityDetailData = data['results']);
    }



}

/*
this.cityList = data.results*/
