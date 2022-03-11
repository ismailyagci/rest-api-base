const schema = {
    validation: {
        id: {
            fieldTitle: "Todo Kimliği",
            type: "id"
        }
    },
    checkIds: {
        id: {
            collectionName: "todos",
            fieldTitle: "Todo Kimliği",
            extraFilters: {
                visible: true,
            }
        },
    },
};
export default schema;