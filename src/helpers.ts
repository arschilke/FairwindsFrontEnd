export function calculateAge(birthday: Date | string | undefined): number {
    if (birthday instanceof Date) {
        var ageDifMs = Date.now() - birthday.getTime();
    }
    if (birthday == undefined) return NaN;
    ageDifMs = Date.now() - Date.parse(birthday as string);
    var ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}
export function lastFour(value: string | undefined): string | undefined {
    return value?.slice(-4) ?? "";
}
export function formatDate(value: Date | string | undefined) {
    if (value == undefined) return "";
    var date = (value instanceof Date) ? value : new Date(value);

    var year = date.getFullYear();

    var month = (1 + date.getMonth()).toString();
    month = month.length > 1 ? month : '0' + month;

    var day = date.getDate().toString();
    day = day.length > 1 ? day : '0' + day;

    return month + '/' + day + '/' + year;
}

export const stateList: string[] = ['AK', 'AL', 'AR', 'AS', 'AZ', 'CA', 'CO', 'CT', 'DC', 'DE', 'FL', 'GA', 'GU', 'HI', 'IA', 'ID', 'IL', 'IN', 'KS', 'KY', 'LA', 'MA', 'MD', 'ME', 'MI', 'MN', 'MO', 'MP', 'MS', 'MT', 'NC', 'ND', 'NE', 'NH', 'NJ', 'NM', 'NV', 'NY', 'OH', 'OK', 'OR', 'PA', 'PR', 'RI', 'SC', 'SD', 'TN', 'TX', 'UM', 'UT', 'VA', 'VI', 'VT', 'WA', 'WI', 'WV', 'WY']