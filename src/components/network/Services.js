
import axios from "axios";
import { $Url, $Headers } from "./Url";
const invokeApi = async (method, url, headers, params) => {
    try {
        const options = {
            method: method,
            url: url,
            headers: headers,
            params: params ?? ''

        }
        console.log('options', options)
        const response = await axios.request(options);
        console.log('result+', response);
        return response.data;
    } catch (error) {
        console.error('error:+', error);
        throw error;
    }
}



export const $Services = {
    get_currencylist: async (json) => {
        return invokeApi('GET', $Url.GET_currency_list, $Headers.currectHealders, json)
    },
    post_currencyexchange: async (json) => {
        return invokeApi('GET', $Url.postCurrencyConvert, $Headers.currectHealders, json)
    },

}

