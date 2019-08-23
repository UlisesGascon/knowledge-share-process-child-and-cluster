const util = require('util');
const {exec} = require('child_process');
const execPromise = util.promisify(exec);

const videos = [{
    url: 'https://www.youtube.com/watch?v=kMfTQvMaghQ',
    name: '[FFF]Backend-Frontend-apartheid'    
}, {
    url: 'https://www.youtube.com/watch?v=A52aiKWRZD8',
    name: '[FFF]Where-should-unit-tests-run'
}, {
    url: 'https://www.youtube.com/watch?v=mfm-fcMpMTw',
    name: '[FFF]Why-I-quit-my-job-at-Spotify'
}, {
    url: 'https://www.youtube.com/watch?v=jERtxLWrKjs',
    name: '[FFF]MPJ-first-job'
}];

function videoDownload(video){
    console.log(`${video.name} has started!`)
    return execPromise(`youtube-dl ${video.url} -o ${__dirname}/bulk_videos/${video.name}.mp4`)
        .then((output) => {
            console.log(`${video.name} has finished!`)
            return Promise.resolve(output) // {stdout, stderr}
        })
}

console.log('---- YOUTUBE BULK DOWNLOADER ----')
Promise.all(videos.map(videoDownload))
    .then(() => {
        console.log('--- ALL VIDEOS HAVE BEEN DOWNLOADED ---')
        console.log('---- THANKS FOR USE YOUTUBE BULK DOWNLOADER ----')
    })
    .catch(console.error)