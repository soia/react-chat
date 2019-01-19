export default function titlenitials(title) {
    try {
        return title
            .split(' ')
            .map(word => word[0])
            .map(chat => chat.toUpperCase())
            .slice(0, 2)
            .join('');
    } catch (e) {
        console.error(e);
        return 'error name';
    }
}
