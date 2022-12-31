export function generateValidUrl(url: string): string {
    if (url.startsWith('http://www.') || url.startsWith('https://www.')) {
        return url;
    }
    if (url.startsWith('www.')) {
        return `https://${url}`;
    }
    if (url.startsWith('http://') || url.startsWith('https://')) {
        const urlArray = url.split('//');
        if (urlArray[1].startsWith('www.')) {
            return url;
        }
        return `${urlArray[0]}//www.${urlArray[1]}`;
    }
    if (url.split('//').length > 1) {
        return `https://${url}`;
    }
    return `https://www.${url}`;
}
