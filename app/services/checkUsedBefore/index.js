import "documents";
import { collections } from "constraints";
import { returnMessage } from "./utils";
import typesMessages from "./messages";
import { cloneObject } from "utils";

/** 
*  @param {Object<string, CheckInterface} schema
*/
const checkUsedBefore = async (schema = {}, props = {}) => {
    const propNames = Object.keys(schema);

    for (const propName of propNames) {
        const schemaFields = schema[propName] || {};
        const value = props[propName];

        const selectedCollection = collections[schemaFields.collectionName];
        const extraFilters = schemaFields.extraFilters || {};

        const filterObject = extraFilters;
        filterObject[propName] = value;
        
        let data = await selectedCollection.find(filterObject);

        data = cloneObject(data);

        if (schemaFields.filter) data = data.filter((object) => eval(schemaFields.filter));
        if (data.length) return returnMessage(
            typesMessages.definedPropName(schemaFields.fieldTitle, schemaFields.collectionName, value)
        );
    };

    return {
        status: true
    };
};
export default checkUsedBefore;