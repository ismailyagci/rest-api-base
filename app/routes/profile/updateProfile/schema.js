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
        profileImageId: {
            type: "length",
            fieldTitle: "Profil Fotoğrafı",
            typeOptions: {
                min: 1
            }
        },
    },
    checkIds: {
        profileImageId: {
            fieldTitle: "Profil Fotoğrafı",
            collectionName: "images",
            extraFilter: {
                visible: true
            }
        },
    },
    checkUsedBefore: {
        mail: {
            fieldTitle: "E-Posta",
            collectionName: "users",
            extraFilter: {
                visible: true,
            },
            filter: "object._id !== props.userId"
        }
    }
};

export default schema;