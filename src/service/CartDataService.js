import axios from 'axios'

class CartDataService {
    
    findAllItems() {
        return axios.get(`http://localhost:8080/findAllItems`);
    }
    
    deleteItem(id) {
        return axios.delete(`http://localhost:8080/deleteItem/${id}`)
    }

    updateItem(Item) {
        return axios.put(`http://localhost:8080/updateItem/`, Item)
    }

    addItem(Item) {
        return axios.post(`http://localhost:8080/addItem/`, Item)
    }
}

export default new CartDataService()