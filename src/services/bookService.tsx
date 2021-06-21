import { headers, headersJwt } from "./network"
import { BASE_URL } from "../constants/Setting";

interface BooksProps {
    token: string,
    ma_ke?: string,
}

const getBooks = async (payload: BooksProps) => {
    const { token } = payload;
    let response = await fetch(`${BASE_URL}kma/books/books`, {
        method: 'GET',
        headers: headersJwt(token),
    });
    let responseJson = await response.json();
    return responseJson;
}

const getBooksInShelf = async (payload: BooksProps) => {
    const { token, ma_ke } = payload;
    let response = await fetch(`${BASE_URL}kma/books/books`, {
        method: 'POST',
        headers: headersJwt(token),
        body: JSON.stringify({ ma_ke }),
    });
    let responseJson = await response.json();
    return responseJson;
}

interface PropsAddBook {
    formData: {};
    token: string;
}

const addBook = async (payload: PropsAddBook) => {
    const { token, formData } = payload;
    let response = await fetch(`${BASE_URL}kma/books/add`, {
        method: 'POST',
        headers: headersJwt(token),
        body: JSON.stringify(formData),
    });
    let responseJson = await response.json();
    return responseJson;
}

// interface AddBookProps {
//     ten_sach: string,
//     ten_ke: string,
//     ma_ke: string,
//     ten_tac_gia: [string],
//     nha_xuat_ban: string,
//     ngay_xuat_ban: string,
//     so_trang: number,
//     gia_sach: number,
//     the_loai: string,
//     ngon_ngu: string,
//     images: string,
//     so_luong: number,
//     mo_ta: string,
//     series: string,
//     tap: string
// }

// const addBook = async (token: string, book: AddBookProps) => {
//     let response = await fetch(`${BASE_URL}kma/books/add`, {
//         method: 'POST',
//         headers: headersJwt(token),
//         body: JSON.stringify(book)
//     });
//     let responseJson = await response.json();
//     return responseJson;
// }



interface BookProps {
    id: string,
    ten_sach: string,
    ten_ke: string,
    ma_ke: string,
    ten_tac_gia: [string],
    nha_xuat_ban: string,
    ngay_xuat_ban: string,
    so_trang: number,
    gia_sach: number,
    the_loai: string,
    ngon_ngu: string,
    images: string,
    so_luong: number,
    mo_ta: string,
    series: string,
    tap: string
}

const updateBook = async (token: string, book: BookProps) => {
    let response = await fetch(`${BASE_URL}kma/books/edit`, {
        method: 'POST',
        headers: headersJwt(token),
        body: JSON.stringify(book)
    });
    let responseJson = await response.json();
    return responseJson;
}


const deleteBook = async (token: string, id: string) => {
    let response = await fetch(`${BASE_URL}kma/books/delete`, {
        method: 'POST',
        headers: headersJwt(token),
        body: JSON.stringify({ id })
    });
    let responseJson = await response.json();
    return responseJson;
}


const searchBook = async (token: string, ma_sach: string) => {
    let response = await fetch(`${BASE_URL}kma/books/search`, {
        method: 'POST',
        headers: headersJwt(token),
        body: JSON.stringify({ ma_sach })
    });
    let responseJson = await response.json();
    return responseJson;
}


export {
    getBooks,
    addBook,
    updateBook,
    deleteBook,
    searchBook,
    getBooksInShelf
}
