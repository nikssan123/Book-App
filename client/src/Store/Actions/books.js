import { apiCall } from "../../Services/api";
import { addError } from "./errors";


export const postBook = (  {title, author, description, genre, language }) => {
    return dispatch => {
        return apiCall("POST", "/api/books", {title, author, description, genre, language}).then(res => {
            console.log(res);
        }).catch(err => {
            return dispatch(addError(err));
        });
    }
}


// return new Promise((resolve, reject) => {
//     apiCall("POST", "/api/books", {title, author, description, genre, language}).then(res => {
//         return resolve();
//     }).catch(err => {
//         dispatch(addError(err));
//         return reject(err);
//     });
// })