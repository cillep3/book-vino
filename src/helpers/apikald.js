import axios from 'axios'

// PERSONAL API-CALL
const api = {
    baseUrl: "http://localhost:5001/"
}

// POST - Create new winery
export const createWinery = (wineryData) => {

    // POST http://localhost:5001/winery
    // axios.post(url, postdata)
    let response = axios.post(api.baseUrl + "winery/", wineryData).then(res => { return res.data })

    return response;
}

// GET - Get all wineries
export const getData = () => {

    // GET http://localhost:5001/winery
    let response = axios.get(api.baseUrl + "winery").then((res) => {
        return res.data;
    })

    return response;
}

// GET - Get winery by id
export const getDataById = (wineryId) => {

    // GET http://localhost:5001/winery/60a769c555a0b748f0658a0a
    let response = axios.get(api.baseUrl + "winery/" + wineryId).then((res) => {
        return res.data;
    })

    return response;
}

// DELETE - Delete winery
export const deleteWinery = (wineryId) => {

    // DELETE http://localhost:5001/winery/60bf57644a0700310855365b
    let response = axios.delete(api.baseUrl + "winery/" + wineryId).then((res) => {
        return res.data;
    })
    return response;
}

// PUT - Change winery 
export const changeWinery = (wineryData, wineryId) => {

    // PUT http://localhost:5001/winery/60bf577c4a0700310855365c
    let response = axios.put(api.baseUrl + "winery/" + wineryData, wineryId).then(res => { return res.data })
    return response;
}