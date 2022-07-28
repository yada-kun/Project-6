import axios from 'axios';

const BASE_URL = 'https://cloudsky-webnovel-be.herokuapp.com/';

export const getNovels = () => {
    return axios.get(`${BASE_URL}/api/novels`)
}

export const createNovels = (body) => {
    return axios.post(`${BASE_URL}/api/novels`, body);
}

export const deleteNovels = (id) => {
    return axios.delete(`${BASE_URL}/api/novels/${id}`);
}

export const getOneNovel = (id) => {
    return axios.get(`${BASE_URL}/api/novels/${id}`)
}

export const updateNovel = (body) => {
    return axios.put(`${BASE_URL}/api/novels/${body.id}`, body);
}

export const getAnnouncement = () => {
    return axios.get(`${BASE_URL}/api/announcements`)
}


export const getOneAnnouncement = (id) => {
    return axios.get(`${BASE_URL}/api/announcements/${id}`)
}

export const createAnnouncement = (body) => {
    return axios.post(`${BASE_URL}/api/announcements`, body);
}

export const deleteAnnouncements = (id) => {
    return axios.delete(`${BASE_URL}/api/announcements/${id}`);
}

export const updateAnnouncements = (body) => {
    return axios.put(`${BASE_URL}/api/announcements/${body.id}`, body);
}
