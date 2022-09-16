import { AbstractControl, Validators } from "@angular/forms";

export class CustomValidators {
    static prefixLength(control: AbstractControl): {[key: string]: boolean} {
        const value: string = control.value;
        if (value.length <= 3){
            return {prefixLength: true};
        }else{
            if (value.indexOf('+') > -1 ) {
                return {prefixLength: true};
            }else{
                return {prefixLength: false};
            }
        } 
    }
    static mobileNumberLength(control: AbstractControl): {[key: string]: boolean} {
        const value: string = control.value;
        if (value.length == 0){
            return {prefixLength: true};
        }else{
            if (value.indexOf('')  <= 20 ) {
               
                return  {prefixLength: !isNaN(parseInt(value))};
            }else{
                return {prefixLength: false};
            }
        } 
    }
    
}