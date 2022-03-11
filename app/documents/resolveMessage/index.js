

/***
*   @typedef { "USER_NOT_FOUND" | "PASSWORD_ERROR" | "JWT_ERROR" | "EXPIRE_TOKEN" | "ONLY_IMAGE_UPLOAD"  | "LOGIN" | "SIGNUP" | "TOKEN_CONTROLLER" | "UPLOAD_IMAGE" | "CREATE_TODO" | "UPDATE_TODO" | "DELETE_TODO" | "GET_TODOS" | "GET_TODO_DETAIL" | "GET_PROFILE" | "UPDATE_PROFILE"}
*/
const CONSTANTS_INTERFACE = String;

/** @typedef {(object|Array.)} */
const ARRAY_OR_OBJECT = null;

/** 
*  @type {{
*   data: ARRAY_OR_OBJECT,
*   name: CONSTANTS_INTERFACE,
*   res: Function,
*  }}
*/
const document = {
    res: Function,
    data: Object,
    name: String,
};

/** 
*   @type {{
*       error: String
*   }} 
*/
const messageOptinos = {
    error: String
};

export default {
    document,
    messageOptinos
};