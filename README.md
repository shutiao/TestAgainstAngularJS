# 狴犴
开发新测试网站“狴犴”，整合多种JavaScript框架及复杂测试场景  
## To Deploy the Web Server
```sh
git clone https://github.com/SphinxWork/tests.git
cd bian
npm install
```
## To Run the Web Server
``` bash
chmod +x ./bin/www
./bin/www
```
## Helpful Commands
### Install [Node.js][0] in Ubuntu
``` bash
curl -sL https://deb.nodesource.com/setup_9.x | sudo -E bash -
sudo apt-get install -y nodejs
```
### Config Proxy to Speed Up
``` bash
git config --global http.proxy 'socks5://10.10.8.66:1080'
git config --global https.proxy 'socks5://10.10.8.66:1080'
``` 
### Run server in the backend continuously
``` bash
[sudo] npm install forever -g
forever start ./bian/bin/www
```
### Emulate Additional Server Processing Time
``` JavaScript
|--- bian
        └── routes
                └── timeout.js
// the delay is 0 milliseconds to wait before proceeding to next middleware
setTimeout(function(){next();}, 0);
```
## Design and Development
### File Organizing
Folder Name | Function
----------- | --------
bin | bootstrape the web server
app.js | Server-side entry point
routes | Server-side endpoint handler
routes/index.js | Server-side routes entry point
views  | Client-side HTML files
public | Client-side static(js) files

### Organizing Style
+ Keep files encapsualted and bite-size
+ Server Side: Put Each Module in a Separate File for Routing (e.g. NGJS, HTTP)
+ Client Side: Put JS file separate from HTML file

### Test Case Development Code
+ Each Test Case should have an unique number to identify and track. <module-name>-<test-suite>-<case-number>. eg. HTTP-1-1
+ Each Test Case should have a description and expecation attached to it.

### Add a new level-one endpoint
1. /views/partials/nav.html Add hyperlink(/modulename) into the navigation menu
2. Create a separate file (modulenameR.js) in the /routes and add it into routes/index.js
3. /routes/modulenameR.js Add GET/POST handler


[0]: https://nodejs.org/en/download/package-manager/