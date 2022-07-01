This is a Node.js server for interacting with postgres server. 

What does a server do?
1. Opens up a port to listen for incoming requests from clients
2. Defines what to do with each request that comes in (the server's response).


To initialize this project do the following steps:
1. git clone <project repo> 
2. npm init
3. npm install . (this will install all the dependencies from package.json)
4. To download and install an NPM package into our project,express , we will need to run the following command from your terminal (make sure you are in your project’s root folder when you run this):
   npm i -s express

   -i is a shorthand alias for --install, you can use either. This will add express to a folder called node_modules in your root project folder. 

   -s is a shorthand alias for --save , you can use either. This is a tag you can add to your npm install command to automatically save it to your package.json.

5. React.js or any other js framework look for index.js files as the entry point for that particular directory.


To add new dependencies: 

const <variable name> = require('<name of the package>')

<variable name> - arbitrary name

"require" - require() is a built-in Node function that lets you gain access to another Node file’s code. You use this for every dependency you bring into your Node server, and you can also write your own Node files and import them into your main server file the same way.

<name-of-package> should be the exact name of the folder or file you wish to import 

