/*
@see: https://formulae.brew.sh/formula/youtube-dl
brew install youtube-dl
*/

const  {exec} = require('child_process');

const video = {
    url: 'https://www.youtube.com/watch?v=6ZdIwbHne-c',
    name: 'celebrating_nodejs_turning_10_years_old'
}

exec(`youtube-dl ${video.url} -o ${__dirname}/${video.name}.mp4`, (err, stdout, stderr) => {
    if(err){  
        console.log('-----ERRROR-----')
        console.log(err)
    }
    if(stderr) {
        console.log('-----STDERR-----')
        console.log(stderr)        
    }
    console.log('----STDOUT----')
    console.log(stdout)
  })

