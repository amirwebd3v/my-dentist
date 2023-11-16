export function toPersianNumber(number: number | string): string {
    const persianDigits = '۰۱۲۳۴۵۶۷۸۹';
    return String(number).replace(/\d/g, (match) => persianDigits[parseInt(match)]);
}