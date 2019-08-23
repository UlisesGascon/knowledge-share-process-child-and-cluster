const  {exec} = require('child_process');

exec(`python3 ${__dirname}/basic.py`, (err, stdout) => {
  if(err) console.log('[Exec] ERROR:', err)
  console.log('[Exec] stdout:', stdout)
})

