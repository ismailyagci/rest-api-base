import "documents";
import types from "./types";
import messages from "./messages";
import { returnMessage } from "./utils";

/** 
*  @param {Object<string, ValidationInterface} schema
*/
const validation = (schema = {}, props = {}) => {
    const propNames = Object.keys(schema);

    for (const propName of propNames) {
        const schemaFields = schema[propName] || {};

        const value = props[propName];

        const valueValidate = types.required(value);
        if (!valueValidate) return returnMessage(
            messages.required(schemaFields.fieldTitle, value)
        );

        const typeValidate = types[schemaFields.type](value, schemaFields.typeOptions);
        const typeMessage = messages[schemaFields.type];
        if (!typeValidate) return returnMessage(
            typeMessage(schemaFields.fieldTitle, value, schemaFields.typeOptions)
        ); 
    };

    return {
        status: true
    };
};
export default validation;