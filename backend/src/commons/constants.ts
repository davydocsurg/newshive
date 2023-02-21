export const JWT_SECRET = "@davydocsurg@NewsHive";
export const DEFAULT_PROFILE_PHOTO = "users/default.png";
export const cookieOptions = {
    expires: new Date(Date.now() + parseInt("90", 10) * 24 * 60 * 60 * 1000),
    secure: false,
    httpOnly: true,
};
export const NEWS_PER_PAGE = 10;
export const NEWS_PER_PAGE_ADMIN = 20;
export const NEWS_API_BASE_URL = "https://api.newscatcherapi.com/v2/";
