export const generateRandomKey = (length: number) => {
    const carater =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    let key = "";
    while (key.length < length) {
        const index = Math.floor(Math.random() * carater.length);
        key += carater.charAt(index);
    }
    return key;
};

export const validateSecretKey = (key: string) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    return regex.test(key);
};

export const generateSecretKeyUtil = (length: number) => {
    let key = generateRandomKey(length);
    while (!validateSecretKey(key)) {
        key = generateRandomKey(length);
    }
    return key;
};
