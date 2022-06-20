import axios from 'axios';

const numPerPage = 12;
const apiKey = '26533156-9695e0ec144eb89afbc08934a';
const apiUrl = `https://pixabay.com/api/?key=${apiKey}&image_type=photo&orientation=horizontal&per_page=${numPerPage}`;

console.log(apiUrl);


export const getImages = async (searchTerm, page) => {
    try {
        const response = await axios.get(apiUrl + `&q=${searchTerm}&page=${page}`);
        console.log(response);
        const result = response.data.hits.map(hit => ({
            id: hit.id,
            webformatURL: hit.webformatURL,
            largeImageURL: hit.largeImageURL
        }));
        return result;
    }   catch (error) {
        return [];
    }
};

// added delay for visible spinner

export const getImagesWithDelay = async (searchTerm, page, delay) => {
    return getImages(searchTerm, page).then(sleeper(delay));
};

const sleeper = ms => {
    return function (x) {
        return new Promise(resolve => setTimeout(() => resolve(x), ms));

    };
};