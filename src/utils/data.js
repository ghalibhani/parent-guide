const BASE_URL = 'https://db-parent-guide.up.railway.app';

async function getAllArticles() {
    const response = await fetch(`${BASE_URL}/articles`);
    const responseJson = await response.json();

    return responseJson;
}

async function getPopularArticles() {
    const response = await fetch(`${BASE_URL}/articles/popular`);
    const responseJson = await response.json();

    return responseJson;
}

async function getRecommendationArticles() {
    const response = await fetch(`${BASE_URL}/articles/recommendation`);
    const responseJson = await response.json();

    return responseJson;
}

async function getArticle(id) {
    const response = await fetch(`${BASE_URL}/article/detail/${id}`);
    const responseJson = await response.json();

    return responseJson;
}

export {
    getAllArticles,
    getPopularArticles,
    getRecommendationArticles,
    getArticle
}