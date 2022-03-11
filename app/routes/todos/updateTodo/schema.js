const schema = {
    validation: {
        id: {
            fieldTitle: "Todo Kimliği",
            type: "id"
        },
        content: {
            fieldTitle: "Açıklama",
            type: "string",
        },
        title: {
            fieldTitle: "Todo Adı",
            type: "string"
        }
    },
    checkIds: {
        id: {
            collectionName: "todos",
            fieldTitle: "Todo Kimliği",
            extraFilters: {
                visible: true,
            }
        }
    }
};

export default schema;