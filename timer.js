function toPretty(timeInSeconds) {
    const SECOND = 1;
    const MINUTE = 60 * SECOND;
    const HOUR = 60 * MINUTE;
    const DAY = 24 * HOUR;
    const WEEK = 7 * DAY;

    if (timeInSeconds < 0) {
        return "Invalid input";
    }

    if (timeInSeconds < 1) {
        return "just now";
    } else if (timeInSeconds = 1 ) {
        return "a second ago";
    }
    else if (timeInSeconds < 2 * MINUTE) {
        return "a minute ago";
    }
     else if (timeInSeconds < 1 * HOUR) {
        return Math.floor(timeInSeconds / MINUTE) + " minutes ago";
    } else if (timeInSeconds < 2 * HOUR) {
        return "an hour ago";
    } else if (timeInSeconds < 1 * DAY) {
        return Math.floor(timeInSeconds / HOUR) + " hours ago";
    } else if (timeInSeconds < 2 * DAY) {
        return "a day ago";
    } else if (timeInSeconds < 1 * WEEK) {
        return Math.floor(timeInSeconds / DAY) + " days ago";
    } else if (timeInSeconds < 2 * WEEK) {
        return "a week ago";
    } else {
        return Math.floor(timeInSeconds / WEEK) + " weeks ago";
    }
}