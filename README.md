# [KS][S] [GuideSmiths](https://guidesmiths.com/) Process Child + Cluster

Este repo es parte de una formación interna en [GuideSmiths](https://guidesmiths.com/)

## Bases teóricas

### Standard Output

#### stdin vs stdout vs stderr

![Contexto](http://img.c4learn.com/2010/01/Stdstreams-notitle.svg_.png)

#### I/O direction

![Unix contexto](https://bash.cyberciti.biz/uploads/bashwiki/9/9b/Output-redirect_filename.png)

#### I/O Redirection

```bash
python3 exec/error.py > logs/stout_clean.log # Guardar solo el stdout
python3 exec/error.py >> logs/append.log  # Append del stdout
python3 exec/error.py &> logs/all.log # Guardar stdout y stderr
python3 exec/error.py 1> logs/stout.log # Guardar solo el stdout
python3 exec/error.py 2> logs/error.log # Guardar solo el stderr
python3 exec/error.py 1> logs/all_stout.log 2>&1 # Guardar el stdout (redirect de stderr)
python3 exec/error.py 2> logs/all_stderr.log 1>&2 # Guardar el error (redirect de stout)
```

### Relación entre los procesos

![Relación](https://raw.githubusercontent.com/Fictizia/Master-en-Programacion-FullStack-con-JavaScript-y-Node.js_ed3/master/assets/clase74/d4172e11-a496-4696-993e-6f818f1e891f.png)

### Métodos esenciales

- `child_process.exec()` genera un shell y ejecuta un comando dentro de ese shell, pasando el `stdout` y el `stderr` al callback cuando se completa. Internamente utiliza `buffer` [Doc](https://nodejs.org/api/child_process.html#child_process_child_process_exec_command_options_callback)
- `child_process.execSync()` una versión síncrona y bloqueante de `child_process.exec()` [Doc](https://nodejs.org/api/child_process.html#child_process_child_process_execsync_command_options)
- `child_process.execFile()` similar a `child_process.exec()`, excepto que genera el comando directamente sin generar primero un shell de forma predeterminada [Doc](https://nodejs.org/api/child_process.html#child_process_child_process_execfile_file_args_options_callback)
- `child_process.execFileSync()` una versión síncrona y bloqueante de `child_process.execFile()` [Doc](https://nodejs.org/api/child_process.html#child_process_child_process_execfilesync_file_args_options)
- `child_process.spawn()` genera un shell y ejecuta un comando devolviendo un `stream` y que debemos gestionar por eventos [Doc](https://nodejs.org/api/child_process.html#child_process_child_process_spawn_command_args_options)
- `child_process.spawnSync()` una versión síncrona y bloqueante de `child_process.spawn()` [Doc](https://nodejs.org/api/child_process.html#child_process_child_process_spawnsync_command_args_options)
- `child_process.fork()` Es similar a `child_process.spawn()` solo que nos permite enviar mensajes al proceso hijo [Doc](https://nodejs.org/api/child_process.html#child_process_child_process_fork_modulepath_args_options)

## Contenidos

**[Process](https://github.com/Fictizia/Master-en-Programacion-FullStack-con-JavaScript-y-Node.js_ed3/blob/master/teoria/clase74.md#process)**

- [Información del proceso](process/basic.js)
- [Variables de Entorno](process/env.js)
- [Gestión de errores/salidas](process/exit.js)

**[Ejecutables](https://github.com/Fictizia/Master-en-Programacion-FullStack-con-JavaScript-y-Node.js_ed3/blob/master/teoria/clase74.md#creando-ejecutables)**

- [Crear un ejecutable](executables/basic.js)

**[Child Process](https://github.com/Fictizia/Master-en-Programacion-FullStack-con-JavaScript-y-Node.js_ed3/blob/master/teoria/clase74.md#child-process)**

- exec
  - [Ejemplo simple](exec/basic.js)
  - [Ejemplo completo](exec/error.js)
  - [Encapsular la librería `youtube-dl`](exec/youtube_downloader.js)
  - [Procesos hijo en paralelo con `youtube-dl`](exec/youtube_bulk.js)
- spawn
  - [Ping infinito a un servidor](spawn/basic.js)
  - [Ping y append juntos](spawn/ping_log.js)

**[Cluster](https://github.com/Fictizia/Master-en-Programacion-FullStack-con-JavaScript-y-Node.js_ed3/blob/master/teoria/clase74.md#cluster)**

- [Servidor Normal](cluster/server.js)
- [Servidor Clusterizado](cluster/cluster-server.js)

## Recursos

### Live Coding (T1C5) | Child processes con Nodejs y Firebase

[![Link a mi video de Youtube](https://www.youtube.com/watch?v=2n5_zYdVypc)](https://www.youtube.com/watch?v=2n5_zYdVypc&feature=youtu.be)

### Gestion de errores

- [The Node.js Way - Understanding Error-First Callbacks](http://fredkschott.com/post/2014/03/understanding-error-first-callbacks-in-node-js/)
- [Node.js Best Practices | Error Handling Practices](https://github.com/i0natan/nodebestpractices#2-error-handling-practices)
- [Building Robust Node Applications: Error Handling](https://strongloop.com/strongblog/robust-node-applications-error-handling/)
- [Joyent | Production Practices](https://www.joyent.com/node-js/production/design/errors)
- [How to prevent your Node.js process from crashing](https://medium.com/dailyjs/how-to-prevent-your-node-js-process-from-crashing-5d40247b8ab2)

### Variables del Entorno

- [Working with Environment Variables in Node.js](https://www.twilio.com/blog/2017/08/working-with-environment-variables-in-node-js.html)
- [process.env: What it is and why/when/how to use it effectively](https://codeburst.io/process-env-what-it-is-and-why-when-how-to-use-it-effectively-505d0b2831e7)
- [Environment Variables in Node.js](https://medium.com/@maxbeatty/environment-variables-in-node-js-28e951631801)
- [Here’s how you can actually use Node environment variables](https://medium.freecodecamp.org/heres-how-you-can-actually-use-node-environment-variables-8fdf98f53a0a)
- [Using dotenv package to create environment variables](https://medium.com/@thejasonfile/using-dotenv-package-to-create-environment-variables-33da4ac4ea8f)
- [Configuration settings in Node with dotenv](https://medium.com/@jonjam/configuration)
- [Managing Configurations in Node.JS apps with dotenv and convict](https://medium.com/@sherryhsu/managing-configurations-in-node-js-apps-with-dotenv-and-convict-d74070d37373)

#### Librerías

- [dotenv](https://github.com/motdotla/dotenv) *Loads environment variables from .env for nodejs projects.*
- [cross-env](https://github.com/kentcdodds/cross-env) *Set environment variables cross-platform.*


### Creando ejecutables

- [node-upstarter](https://github.com/carlos8f/node-upstarter) *Easily create upstart services for your node apps*
- [diable](https://github.com/IonicaBizau/diable) 😈 *Daemonize the things out.*
- [daemonize-process](https://github.com/silverwind/daemonize-process#readme) *Daemonize the current Node.js process*
- [daemonix](https://github.com/BlueRival/daemonix) *A utility for creating daemons out of NodeJS applications.*

### Child Process

- [Node.js Child Processes: Everything you need to know](https://medium.freecodecamp.org/node-js-child-processes-everything-you-need-to-know-e69498fe970a)
- [Understanding execFile, spawn, exec, and fork in Node.js](https://dzone.com/articles/understanding-execfile-spawn-exec-and-fork-in-node)
- [Node.js: managing child processes](http://krasimirtsonev.com/blog/article/Nodejs-managing-child-processes-starting-stopping-exec-spawn)
- [Getting to know Node’s child_process module](https://medium.com/the-guild/getting-to-know-nodes-child-process-module-8ed63038f3fa)
- [Nodejs Doc | exec](https://nodejs.org/api/child_process.html#child_process_child_process_exec_command_options_callback)
- [Nodejs Doc | execFile](https://nodejs.org/api/child_process.html#child_process_child_process_execfile_file_args_options_callback)
- [Nodejs Doc | fork](https://nodejs.org/api/child_process.html#child_process_child_process_fork_modulepath_args_options)
- [Nodejs Doc | execSync](https://nodejs.org/api/child_process.html#child_process_child_process_execsync_command_options)
- [Nodejs Doc | execFileSync](https://nodejs.org/api/child_process.html#child_process_child_process_execfilesync_file_args_options)
- [Nodejs Doc | spawnSync](https://nodejs.org/api/child_process.html#child_process_child_process_spawnsync_command_args_options)
- [Nodejs Doc | spawn](https://nodejs.org/api/child_process.html#child_process_child_process_spawn_command_args_options)

#### Librerías

- [execa](https://github.com/sindresorhus/execa#readme)
- [opn](https://github.com/sindresorhus/opn#readme)
- [node-worker-farm](https://github.com/rvagg/node-worker-farm)
- [spawnd](https://github.com/smooth-code/jest-puppeteer/tree/master/packages/spawnd)

### Cluster

- [Scaling Node.js Applications](https://medium.freecodecamp.org/scaling-node-js-applications-8492bd8afadc)
- [Taking Advantage of Multi-Processor Environments in Node.js](http://blog.carbonfive.com/2014/02/28/taking-advantage-of-multi-processor-environments-in-node-js/#tldr)
- [Modo cluster para node.js](http://pinchito.es/2013/modo-cluster.html)
- [How to Create a Node.js Cluster for Speeding Up Your Apps](https://www.sitepoint.com/how-to-create-a-node-js-cluster-for-speeding-up-your-apps/)
- [How to scale your Node.js server using clustering](https://medium.freecodecamp.org/how-to-scale-your-node-js-server-using-clustering-c8d43c656e8f)
- [Clustering in NodeJs — Performance Optimization](https://medium.com/tech-tajawal/clustering-in-nodejs-utilizing-multiple-processor-cores-75d78aeb0f4f)
- [Understanding the NodeJS cluster module](http://www.acuriousanimal.com/2017/08/12/understanding-the-nodejs-cluster-module.html)

#### Librerias

- [luster](https://github.com/nodules/luster)
- [cluster-map](https://www.npmjs.com/package/cluster-map)
- [PM2](https://www.npmjs.com/package/pm2)
