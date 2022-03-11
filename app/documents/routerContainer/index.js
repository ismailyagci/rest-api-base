import "../validation";
import "../check";

/***
* @typedef {"get" | "post" }
*/
const TYPE_INTERFACE = String;

/**
*  @typedef {Object<string, ValidationInterface} VALIDATION_INTERFACE
*/
const VALIDATION_INTERFACE = Object;

/**
*  @typedef {Object<string, CheckInterface} CHECK_INTERFACE
*/
const CHECK_INTERFACE = Object;


/** 
*  @type {{
*    checkUsedBefore: CHECK_INTERFACE,
*    validation: VALIDATION_INTERFACE,
*    checkIds: CHECK_INTERFACE,
*    type: TYPE_INTERFACE,
*    response: Object,
*    request: Object,
*    method: Function
*  }}
*/
const routerContainer = {
    checkUsedBefore: Object,
    validation: Object,
    checkIds: Object,
    method: Function,
    response: Object,
    request: Object,
    type: String,
};
export default routerContainer;