const  {exec} = require('child_process');

exec(`python3 ${__dirname}/error.py`, (err, stdout, stderr) => {
  if(err) console.log('[Exec] ERROR:', err)
  console.log('[Exec] stdout:', stdout)
  console.log('[Exec] stderr:', stderr)
})

