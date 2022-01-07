/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import ApiEndpoint from '../globals/ApiEndpoint';

const Search = async (query, page) => {
    const response = await axios.get(ApiEndpoint.Search(query, page));
    const { data } = response;

    if (!data) {
        return [];
    }

    return data.results;
};

export {
    Search,
};
