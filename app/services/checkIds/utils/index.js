import { collectionsNames } from "constraints";

export const returnMessage = (message) => ({
    status: false,
    message
});

export const humanizeCollections = (collectionName) => {
    return collectionsNames[collectionName];
};
