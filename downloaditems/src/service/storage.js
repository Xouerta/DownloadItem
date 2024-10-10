const PREFIX = "metc_";

// 用户头
const USER_PREFIX = `${PREFIX}user_`;

const USER_TOKEN = `${USER_PREFIX}token`;
const USER_INFO = `${USER_PREFIX}info`;

const set = (key, value) => {
    localStorage.setItem(key, value);
};

const get = (key) => localStorage.getItem(key);

export default {
    set,
    get,
    USER_TOKEN,
    USER_INFO,
};
