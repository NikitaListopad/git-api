import api from '../http'

export default class SearchService {
    static async getSearchRequest(value, page) {
        return api.get(`repositories?q=${value}&per_page=20&page=${page}`);
    }
}