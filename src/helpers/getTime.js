export const getTime = () => {
    const MONTHS = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ];
    const now = new Date();
    return `${MONTHS[now.getMonth()]} ${now.getDate()}, ${now.getFullYear()}`
};