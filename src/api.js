import { apiLink } from './config';
export const addItem = (data) => {
    const options = {
        method: 'POST',
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" }
    };
    return fetch(apiLink, options)
}
export const updateItem = (data) => {
    const options = {
        method: 'PUT',
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" }
    };
    return fetch(apiLink + '/' + data.id, options)
}
export const delItem = async (id) => {
    const options = {
        method: 'DELETE',
        headers: { "Content-Type": "application/json" }
    };
    return await fetch(apiLink + '/' + id, options)
}