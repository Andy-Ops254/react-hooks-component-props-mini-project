// minutes to read extra feature.

function readTime (mins) {
    
    if(mins<= 30) {
        const rounded= math.round(mins/5)*5;
        return `☕️ ${rounded} mins read`;
    }

    else if (math.round(mins/10) >30) {
        return `🍱🍱🍱🍱 ${rounded} mins read`}

    else{"🍱🍱🍱🍱🍱🍱🍱 mins.read"}
    
}