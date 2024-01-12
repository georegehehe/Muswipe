import fetch from './request'
import api from './api'

export let humming = (params = {}) => {
    return fetch.post(api.humming, params)
}
export let mix = (params = {}) => {
    return fetch.post(api.mix, params)
}

export let hummingAd = (params = {}) => {
    return fetch.post(api.hummingAd, params)
}
export let mixAd = (params = {}) => {
    return fetch.post(api.mixAd, params)
}