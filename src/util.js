import { appConstans } from './config'
export const validateInput = (item) => {
    if (item.title === '' || item.imageUrl === '' || item.description === '') {
        alert("Invalid input: Empty item. or image link or description");
        return false;
    }
    if (item.description.length > appConstans.MAX_DESC_CHARS) {
        alert(`Invalid input: Description has more than ${appConstans.MAX_DESC_CHARS} characters`);
        return false;
    }
    if (item.title.length > appConstans.MAX_TITLE_CHARS) {
        alert(`Invalid input: Title has more than ${appConstans.MAX_TITLE_CHARS} characters`);
        return false;
    }
    return true;
}

export function getWordCount(description) {
    return description ? description.split(" ").length : 0;
}
export function getCharacterCount(description) {
    return description ? description.length : 0;
}

export const getNewItemId = (dataList) =>
    (dataList && dataList.length > 0
        ? (+dataList.map(p => p.id).reduce((a, b) => a > b ? a : b) + 1) :
        0);