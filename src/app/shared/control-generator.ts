import { Validators } from "@angular/forms";
import { fields } from "./fields";

export const generateForm = (fieldArray) => {
    let group = {}
    fieldArray.forEach(f => {
        let validations = [];
        let field = fields[f]
        if(field.required){
            validations.push(Validators.required)
        }

        if(field.email){
            validations.push(Validators.email)
        }

        if(field.minLength){
            validations.push(Validators.minLength(field.minLength))
        }

        group[f] = ['', validations];
    });
    return group;
}