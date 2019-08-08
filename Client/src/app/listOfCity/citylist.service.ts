import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ICity, CityInfo } from './citylist.model';

@Injectable()

export class CityListService {

    private _ListUrl =  'http://localhost:8080/api';


    constructor(private _http: HttpClient) {
    }

    getCityList(): Observable<ICity[]> {
        return this._http.get<ICity[]>(this._ListUrl);
    }

    getCityDetails(city): Observable<CityInfo[]> {
        return this._http.get<CityInfo[]>(this._ListUrl + '/details/' + city);
    }

}
