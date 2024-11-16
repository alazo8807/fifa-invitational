# Fifa-invitational
This is the API server for fifa-invitational web app.

## Running localy
### Prerequisites: 
- Install mongodb. See https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-os-x/
    - Make sure there is a folder created in /tmp/data/db
    - Give read write perms: sudo chmod 755 /tmp/data/db
    - Make sure it's running by calling `mongod --dbpath=/tmp/data/db` in your terminal.
- (Optional) Install mongoDB Compass gui for easier db queries.
- If you want to use the mongodb hosted somewhere else, copy the uri and export it: i.e: ``export db_uri="mongodb+srv://admin:<password>@cluster0.h0csx.mongodb.net/fifa-invitational?retryWrites=true&w=majority&appName=Cluster0"``

Run:<br>
```
npm install
npm run dev
```

