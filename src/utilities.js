export const collectionofIdsAndDocs = document => {
    return { id: document.id, ...document.data()};
}