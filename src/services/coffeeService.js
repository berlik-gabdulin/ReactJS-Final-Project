export default class CoffeeService {
    _apiBase = 'http://coffee.drive-life.com/';
    
    async getResource(url) {
        const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, recieved ${res.status}`);
        }
        return await res.json();
    }

    async getMenuItems(url) {
        return await this.getResource(url);
    }

    async getCoffeeItems(url) {
        return await this.getResource('/coffee/');
    }

    async postContacts(post) {
        fetch(`${this._apiBase}/contacts/`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                data: post
            })
        });
    }
}