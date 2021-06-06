import { headers, headersJwt } from "./network"
import { BASE_URL } from "../constants/Setting";

interface BookShelfProps {
    token: string,
}

const getBookShelf = async (payload: BookShelfProps) => {
    const { token } = payload;
    let response = await fetch(`${BASE_URL}kma/bookshelf/bookshelf`, {
        method: 'GET',
        headers: headersJwt(token),
    });
    let responseJson = await response.json();
    return responseJson;
}

interface BookShelfProps {
    token: string,
    bookShelf: any
}

const addBookshelf = async (payload: BookShelfProps) => {
    const { token, bookShelf } = payload;
    const postData = {
        ten_ke: bookShelf.name,
        tong_so_sach: 0,
        da_muon: 0
    }
    let response = await fetch(`${BASE_URL}kma/bookshelf/add`, {
        method: 'POST',
        headers: headersJwt(token),
        body: JSON.stringify(postData)
    });
    let responseJson = await response.json();
    return responseJson;
}


const updateBookShelf = async (payload: any) => {
    const { token, bookShelf } = payload;
    const { id, name } = bookShelf;
    let response = await fetch(`${BASE_URL}kma/bookshelf/edit`, {
        method: 'POST',
        headers: headersJwt(token),
        body: JSON.stringify({ id, ten_ke: name })
    });
    let responseJson = await response.json();
    return responseJson;
}


interface DeleteBookShelfProps {
    token: string,
    id: string,
}

const deleteBookShelf = async (payload: DeleteBookShelfProps) => {
    const { token, id } = payload;
    let response = await fetch(`${BASE_URL}kma/bookshelf/delete`, {
        method: 'POST',
        headers: headersJwt(token),
        body: JSON.stringify({ id })
    });
    let responseJson = await response.json();
    return responseJson;
}

export {
    getBookShelf,
    addBookshelf,
    updateBookShelf,
    deleteBookShelf,
}
