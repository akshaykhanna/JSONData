import { apiLink } from './config';
export const addItem = (data) => {
    const options = {
        method: 'POST',
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" }
    };
    return fetch(apiLink, options)
}