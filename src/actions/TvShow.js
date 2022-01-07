/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import ApiEndpoint from '../globals/ApiEndpoint';

const getTvShow = async () => {
    const response = await axios.get(ApiEndpoint.Tv.Popular());
    const { data } = response;

    if (!data) {
        return [];
    }

    return data.results;
};

const getDetailTvShow = async (id) => {
    const response = await axios.get(ApiEndpoint.Tv.Detail(id));
    const { data } = response;

    if (!data) {
        return [];
    }

    return data;
};

export {
    getTvShow,
    getDetailTvShow,
};
