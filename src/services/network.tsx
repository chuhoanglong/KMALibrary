
export const headersJwt = (token: string) => {
    return {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
        'Accept': 'application/json'
    }
}

export const headers = () => {
    return {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
}

module.exports = {
    headersJwt,
    headers
}