export const ERROR_MESSAGES = {
    "USER_NOT_FOUND": "Bu maile ait bir kullanıcı bulunamadı!",
    "PASSWORD_ERROR": "Yanlış şifre!",
    "EXPIRE_TOKEN": "Token eskimiştir, lütfen tekrar giriş yapın!",
    "JWT_ERROR": (message) => `JWT ERROR: ${message}`,
    "ONLY_IMAGE_UPLOAD": "Sadece resim dosyaları yükleyebilirsiniz!",
};

export const SUCCESS_MESSAGES = {
    "LOGIN": "Başarı ile giriş yapılmıştır.",
    "SIGNUP": "Başarı ile yeni kullanıcı oluşturulmuştur.",
    "TOKEN_CONTROLLER": "Token doğrulanmıştır.",
    "UPLOAD_IMAGE": "Resim başarı ile oluşturulmuştur",
    "CREATE_TODO": "Todo başarı ile oluşturulmuştur.",
    "UPDATE_TODO": "Todo başarı ile güncellenmiştir.",
    "DELETE_TODO": "Todo başarı ile silinmiştir",
    "GET_TODOS": "Todolar başarı ile getirilmiştir",
    "GET_TODO_DETAIL": "Todo başarı ile getirilmiştir.",
    "GET_PROFILE": "Profil Başarılı bir şekilde getirildi.",
    "UPDATE_PROFILE": "Profil verisi başarılı bir şekilde güncellenmiştir."
};
