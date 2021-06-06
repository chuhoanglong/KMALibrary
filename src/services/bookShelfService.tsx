import { headers, headersJwt } from "./network"
import { BASE_URL } from "../constants/Setting";
import { delay } from "../utils/Helper";

interface BookShelfModel {
    ten_ke: string,
    tong_so_sach: number,
    da_muon: number,
}

interface BookShelfProps {
    token: string,
}

const getBookShelf = async (payload: BookShelfProps) => {
    const { token } = payload;
    if (__DEV__) {
        await delay(200);
        return {
            status: 200,
            data: [
                {
                    _id: "60a7dcddf2ea183d251b63e6",
                    da_muon: 5,
                    ten_ke: "Ke so 01",
                    tong_so_sach: 20,
                    __v: 0
                },
                {
                    _id: "60a7dce0f2ea183d251b63ec",
                    da_muon: 5,
                    ten_ke: "Ke so 02",
                    tong_so_sach: 20,
                    __v: 0
                }
            ]
        };
    }
    let response = await fetch(`${BASE_URL}kma/bookshelf/bookshelf`, {
        method: 'GET',
        headers: headersJwt(token),
    });
    let responseJson = await response.json();
    return responseJson;
}

interface BookShelfProps {
    token: string,
    ten_ke: string,
    tong_so_sach: number,
    da_muon: number
}

const addBookshelf = async (payload: BookShelfProps) => {
    if (__DEV__) {
        await delay(1000);
        return {
            status: 200,
            data: {
                _id: "60a7dcddf2ea183d251b63e6",
                da_muon: 5,
                ten_ke: "Ke so 10",
                tong_so_sach: 20,
                __v: 0
            },
        }
    }
    const { token, ten_ke, tong_so_sach, da_muon } = payload;
    let response = await fetch(`${BASE_URL}kma/bookshelf/add`, {
        method: 'POST',
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
        method: 'POST',
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
