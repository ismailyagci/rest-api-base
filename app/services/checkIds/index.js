import "documents";
import { collections } from "constraints";
import { returnMessage } from "./utils";
import { isValidId, cloneObject } from "utils";
import typesMessages from "./messages";

/** 
*  @param {Object<string, CheckInterface} schema
*/
const checkIds = async (schema = {}, props = {}) => {
    const propNames = Object.keys(schema);

    for (const propName of propNames) {
        const schemaFields = schema[propName] || {};
        const value = props[propName];

        if (!isValidId(value)) return returnMessage(
            typesMessages.invalidId(schemaFields.fieldTitle, schemaFields.collectionName, value)
        );

        const selectedCollection = collections[schemaFields.collectionName];
        const extraFilters = schemaFields.extraFilters || {};

        let data = await selectedCollection.find({
            _id: value,
            ...extraFilters
        });
       
        data = cloneObject(data);
 
        if (schemaFields.filter) data = data.filter((object) => eval(schemaFields.filter));
        if (!data.length) return returnMessage(
            typesMessages.undefinedId(schemaFields.fieldTitle, schemaFields.collectionName, value)
        );
    };

    return {
        status: true
    };
};
export default checkIds;