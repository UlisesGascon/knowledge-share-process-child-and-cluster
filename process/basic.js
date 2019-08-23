console.log("===================================");
console.log("ID: " + process.pid);
console.log("Title: " + process.title);
console.log("Path: " + process.execPath);
console.log("Current Path: " + process.cwd());
console.log("Node Version: " + process.version);
console.log("Platform: " + process.platform);
console.log("Arch: " + process.arch);
console.log("Uptime: " + process.uptime());
console.log("-----------------------------------");
console.log("arguments: ");
process.argv.forEach((val, index, array) => {
      console.log(`${index}: ${val}`);
});
console.log("===================================");