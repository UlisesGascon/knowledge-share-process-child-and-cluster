process.stdin.resume(); // Let's keep Node Working...

process.on('uncaughtException',  err => {
  console.log("Triggered as uncaughtException")
  console.log("This is a Zombie Process now!")
});

process.on('exit',  err => {
  console.log("Triggered as exit")
  process.exit(0);
});

process.on('SIGINT', () => {
  console.log('OMG! Nooooo! . Control-C... has been pressed!');
  process.exit(0);
});

//banana()