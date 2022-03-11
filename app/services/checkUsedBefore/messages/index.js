import { humanizeCollections } from "../utils";

const typesMessages = {
    invalidId: (fieldTitle, collectionName, value) => `${fieldTitle} parametresi doğrulanmış bir değer değil! (${value})`,
    definedPropName: (fieldTitle, collectionName, value) => `${fieldTitle} parametresi ${humanizeCollections(collectionName)} içerisinde daha önceden tanımlanmıştır. (${value})`,
};
export default typesMessages;