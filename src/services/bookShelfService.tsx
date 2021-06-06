import { headers, headersJwt } from "./network"
import { BASE_URL } from "../constants/Setting";

interface BookShelfProps {
    token: string,
    ten_ke: string,
    tong_so_sach: number,
    da_muon: number
}

const addBookshelf = async (payload: BookShelfProps) => {
    const { token, ten_ke, tong_so_sach, da_muon } = payload;
    let response = await fetch(`${BASE_URL}kma/bookshelf/add`, {
        method: ' POST',
        headers: headersJwt(token),
        body: JSON.stringify({ ten_ke, tong_so_sach, da_muon })
    });
    let responseJson = await response.json();
    return responseJson;
}


interface UpdateBookShelfProps {
    token: string,
    id: string,
    ten_ke: string
}

const updateBookShelf = async (payload: UpdateBookShelfProps) => {
    const { token, id, ten_ke } = payload;
    let response = await fetch(`${BASE_URL}kma/bookshelf/edit`, {
        method: ' POST',
        headers: headersJwt(token),
        body: JSON.stringify({ id, ten_ke })
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
        method: ' POST',
        headers: headersJwt(token),
        body: JSON.stringify({ id })
    });
    let responseJson = await response.json();
    return responseJson;
}


export {
    addBookshelf,
    updateBookShelf,
    deleteBookShelf,
}
