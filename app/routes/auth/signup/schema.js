const schema = {
    validation: {
        mail: {
            fieldTitle: "E-Posta",
            type: "email",
        },
        fullName: {
            type: "length",
            fieldTitle: "İsim Soyisim",
            typeOptions: {
                min: 5
            }
        },
        password: {
            fieldTitle: "Şifre",
            type: "password",
        },
    },
    checkUsedBefore: {
        mail: {
            fieldTitle: "E-Posta",
            collectionName: "users",
            extraFilters: {
                visible: true
            }
        }
    }
};

export default schema;