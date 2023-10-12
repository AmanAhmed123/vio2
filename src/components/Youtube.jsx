import React from "react"


export default function Youtube() {

    const apiKey = "AIzaSyA2ZbZqKkS6MceWNWtcHxMZTA1t1rqRmVE"
    const url = `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=UC6Ooztnt4eIq3TzP-egnG1g`




    return (
        <button onClick={async () => {
            let res = await (await fetch(url))
            console.log(res);
        }}>
            hello youtube
        </button>
    )
}