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
    bookShelf: any
}

const addBookshelf = async (payload: BookShelfProps) => {
    console.log(payload);
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
    console.log(payload);
    const { token, bookShelf } = payload;
    const { id, name } = bookShelf;
    if (__DEV__) {
        await delay(200);
        return {
            status: 200,
            data: {
                _id: id,
                da_muon: 5,
                ten_ke: name,
                tong_so_sach: 20,
                __v: 0
            }
        }
    }
    return;
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
    console.log(payload);

    if (__DEV__) {
        await delay(500);
        return {
            status: 200,
            data: []
        }
    }
    return;
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
