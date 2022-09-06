
ng new HttpClient-example




IN ANOTHER TERMINAL 



md json-data-server


    Directory: C:\CLASSROOM\ANGULAR14


d-----       06-09-2022     17:11                json-data-server


PS C:\CLASSROOM\ANGULAR14> cd .\json-data-server\
PS C:\CLASSROOM\ANGULAR14\json-data-server> npm install -g json-server

added 182 packages, and audited 183 packages in 9s

21 packages are looking for funding
  run `npm fund` for details

4 moderate severity vulnerabilities
To address all issues (including breaking changes), run:
  npm audit fix --force

Run `npm audit` for details.
PS C:\CLASSROOM\ANGULAR14\json-data-server> json-server --watch db.json

  \{^_^}/ hi!

  Loading db.json
  Done

  Resources
  http://localhost:3000/products
  http://localhost:3000/locations
  http://localhost:3000/families
  http://localhost:3000/transactions

  Home
  http://localhost:3000

  Type s + enter at any time to create a snapshot of the database
  Watching...

GET /__rules 404 6.971 ms - 2
GET /db 200 3.678 ms - -
GET /products 200 4.287 ms - 502
GET /__rules 404 2.511 ms - 2
GET /locations 200 3.633 ms - 146
GET /__rules 404 2.262 ms - 2
GET /families 200 4.086 ms - 128
GET /__rules 404 2.225 ms - 2
GET /transactions 200 4.410 ms - 235
GET /__rules 404 0.778 ms - 2