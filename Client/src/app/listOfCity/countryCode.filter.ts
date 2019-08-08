import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'countryCode'
})

export class CountryCodePipe implements PipeTransform {

    transform(value: String, type: String) {
        let output: String = '';
        console.log('calling filter' , value);
        const dictionaryCountryAbbreviationName = {
            'Afghanistan': {
                'code': 'af',
                'currency': 'Afs (Afghan afghani)',
                'capital': 'Kabul'},
            'China': {
                'code': 'cn',
                'currency': 'CN¥ (Yuan)',
                'capital': 'Beijing'},
            'Bangladesh': {
                'code': 'bd',
                'currency': 'Tk (Bangladeshi Taka)',
                'capital': 'Dhaka'},
            'Hong Kong': {
                'code': 'hk',
                'currency': 'HK$ (HongKong Dollar)',
                'capital': 'Victoria City'},
            'India': {
                'code': 'in',
                'currency': '₹ (Rupee)',
                'capital': 'Delhi'},
            'Indonesia': {
                'code': 'id',
                'currency': 'Rp (Indonesian Rupiah)',
                'capital': 'Jakarta'},
            'Iran': {
                'code': 'ir',
                'currency': 'IRR (Iranian Rial)',
                'capital': 'Tehran'},
            'Iraq': {
                'code': 'iq',
                'currency': 'IQD (Iraqi Dinar)',
                'capital': 'Baghdad'},
            'Japan': {
                'code': 'jp',
                'currency': '¥ (Yen)',
                'capital': 'Tokyo'},
            'South Korea': {
                'code': 'kr',
                'currency': '₩ (Won)',
                'capital': 'Seoul'},
            'Malaysia': {
                'code': 'my',
                'currency': 'RM (Malaysian Ringgit)',
                'capital': 'Kuala Lumpur'},
            'Pakistan': {
                'code': 'pk',
                'currency': 'PKRs (Rupee)',
                'capital': 'Islamabad'},
            'Philippines': {
                'code': 'ph',
                'currency': '₱ (Philippine Peso)',
                'capital': 'Manila'},
            'Saudi Arabia': {
                'code': 'sa',
                'currency': 'SR (Saudi Riyal)',
                'capital': 'Riyadh'},
            'Singapore': {
                'code': 'sg',
                'currency': 'S$ (Singapore Dollar)',
                'capital': 'Pulau Ujong'},
            'Taiwan': {
                'code': 'tw',
                'currency': 'NT$ (Taiwan Dollar)',
                'capital': 'Taipei'},
            'Thailand': {
                'code': 'th',
                'currency': 'Rp (Indonesian Rupiah)',
                'capital': 'Bangkok'},
            'Vietnam': {
                'code': 'vn',
                'currency': '₫ (Vietnamese Dong)',
                'capital': 'Hanoi'},

        };

        if (type === 'code') {
            output = dictionaryCountryAbbreviationName[value.toString()].code;
        } else if ( type === 'currency') {
            output = dictionaryCountryAbbreviationName[value.toString()].currency;
        } else {
            output = dictionaryCountryAbbreviationName[value.toString()].capital;
        }


        console.log(output);
        return output;
    }
}



/*

const info = {
            'India': {
                'code': 'in',
                'currency': '₹'}
            }
*/
