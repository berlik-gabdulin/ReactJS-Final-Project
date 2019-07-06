export default class CoffeeService {
    _apiBase = 'http://localhost:3001';

    async getResource(url) {
        const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, recieved ${res.status}`);
        }
        return await res.json();
    }

    async getCoffeeItems() {
        return await this.getResource(`/coffee/`);
    }

    async getGoodsItems() {
        return await this.getResource(`/goods/`);
    }

    async getBestSellersItems() {
        return await this.getResource(`/bestsellers/`);
    }

    async postContacts() {
        fetch(`${this._apiBase}/contacts/`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                
            })
        });
    }
}