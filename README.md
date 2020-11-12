# User Reviews Module for Harry's BnB 
### Harry's BnB App allows users book temporary stays across the globe
*This is a User Reviews Module for a Bed and Breakfast app built with Knex, PostgreSQL, Express, React, and Node.js. Jest test suites included*

> simple, sleek, and fast...

## Demos 
Full App DEMO: https://youtu.be/p5fqJuJXYno


Module DEMO: https://youtu.be/hp5IDduuZCs


![](HARRYBNB_REVIEWS_DEMO.gif)




## Performance - Google PageSpeed Insights
*Optimizations include Brotli and Gzip compressions, webP images, image resizing, and lazy-loading.*


![](https://i.imgur.com/QaQ4tsp.png)


## Getting Started 
Please have PostgreSQL installed. 

Go to knexfile.js

CHANGE 'user', 'password', and 'database' to your settings


```
connection: {
      host: 'localhost',
      password: 'YOURNEWPASSWORD',
      user: 'YOURUSERNAME',
      database: 'YOURDBNAME',
      port: 5432,
    }
```


Install dependencies
```
npm install
```

Seed database
```
npm run knex-seed
```

Build Webpack bundle

```
npm run build
```

Start the app
```
npm start
```

Now go to http://localhost:3009 in your browser, have fun :)


Run test
```
npm run test
```


