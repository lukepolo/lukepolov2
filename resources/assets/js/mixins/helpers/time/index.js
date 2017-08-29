export const parseDate = (date, timezone) => {
    if (timezone) {
        return moment.tz(date, timezone)
    }
    return moment(date)
}