const fetchOfType = async <T>(url: string, config?: {}): Promise<T> => {
    if (config) {
        return fetch(url, config).then<T>(res => res.json());
    }

    return fetch(url).then<T>(res => res.json());
}

export default fetchOfType;