export const validateInput = (item) => {
    if (item.title === '' || item.imageUrl === '' || item.description === '') {
        alert("Invalid input: Empty item. or image link or description");
        return false;
    }
    if (getWordCount(item.description) > 60) {
        alert("Invalid input: Description more than 60 words");
        return false;
    }
    return true;
}

export function getWordCount(description) {
    return description ? description.split(" ").length : 0;
}

export const getNewItemId = (dataList) =>
    (dataList && dataList.length > 0
        ? (+dataList.map(p => p.id).reduce((a, b) => a > b ? a : b) + 1) :
        0);