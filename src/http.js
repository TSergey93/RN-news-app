export class Http {
    static HEADERS = { 'Content-Type': 'application/json' }

    static async get(url) {
        try {
            return await request(url)
        } catch (e) {
            console.log(e)
            throw e
        }
    }
}

async function request(url, method = 'GET') {
    const config = {
        method,
        headers: Http.HEADERS
    }

    const response = await fetch(url, config)
    return await response.json()
}
