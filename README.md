# fbkt-extension-starter
create a quick fbkt extension

requirements:
```
-node ^6.9
-postgres ^9.5 with postgis extension installed
```

usage:
```
git clone https://github.com/stlbucket/fbkt-extension-starter myAppName
cd myAppName
npm install
npm run buildDb
npm run test
npm run dev
```

**/config/dev/index.js** contains db connection setup - alter accordingly


to enable database access and login support, edit *server.js* to include appropriate libs

to build docker container:
```
docker build -t your-extension-name .
```

then to run
```
docker run -d --name your-extension-name -p 80:20831 your-extension-name 
```
