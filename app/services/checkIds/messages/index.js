import { humanizeCollections } from "../utils";

const typesMessages = {
    invalidId: (fieldTitle, collectionName, value) => `${fieldTitle} parametresi doğrulanmış bir değer değil! (${value})`,
    undefinedId: (fieldTitle, collectionName, value) => `${fieldTitle} parametresi ${humanizeCollections(collectionName)} içerisinde bulunamadı. (${value})`,
};
export default typesMessages;