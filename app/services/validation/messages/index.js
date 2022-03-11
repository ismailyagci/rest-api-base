const typesMessages = {
    id: (fieldTitle, value) => `${fieldTitle} parametresi id türünde olmalıdır. (${value}).`,
    password: (fieldTitle, value) => `${fieldTitle} parametresi şifre türünde olmalıdır. (${value}).`,
    string: (fieldTitle, value) => `${fieldTitle} parametresi string olmalıdır. (${value})`,
    number: (fieldTitle, value) => `${fieldTitle} parametresi number olmalıdır. (${value})`,
    email: (fieldTitle, value) => `${fieldTitle} parametresi E-Posta olmalıdır. (${value})`,
    length: (fieldTitle, value, options) => {
        let lengthText = "";
        lengthText = `${lengthText} ${options.min ? options.min : 0} ile `;
        lengthText = `${lengthText} ${options.max ? options.max : "∞"} arasında olmalıdır.`;
        return `${fieldTitle} parametresinin uzunluğu ${lengthText} (${value})`;
    },
    required: (fieldTitle, value) => `${fieldTitle} parametresi gönderilmelidir (${value})`,
};

export default typesMessages;