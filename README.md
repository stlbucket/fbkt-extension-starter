# fbkt-extension-starter
create a quick fbkt extension

requirements:
```
-node ^6.0
-postgres ^9.5 with postgis extension installed (optional)
```

usage:
```
git clone https://github.com/stlbucket/fbkt-extension-starter [my-extension]
cd [my-extension]
npm install
npm run buildDb
npm run test
npm run dev
```

**/config/dev/index.js** contains db connection setup - alter accordingly


to enable database access and login support, edit *server.js* to include appropriate libs

to build docker container:
```
docker build -t [my-extension] .
```

then to run
```
docker run -d --name [my-extension] -p 20831:20831 [my-extension] 
```

and finally
```
http://localhost:20831/api/ping
```
