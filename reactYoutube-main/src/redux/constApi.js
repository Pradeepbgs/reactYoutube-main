const GOOGLE_API_KEY = "AIzaSyBaBGGtydwM_XjbWBg82phJeExzBNJ7zBs";

export const LIVE_CHAT_COUNT = 10;
const query = "carryminati"

export const YOUTUBE_VIDEOS_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&q=${query}&chart=mostPopular&maxResults=50&regionCode=IN&&key=${GOOGLE_API_KEY}`


export const YOUTUBE_SEARCH_API = "https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyBaBGGtydwM_XjbWBg82phJeExzBNJ7zBs&q="