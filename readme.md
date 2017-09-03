## gulp-query-clean
Clean for [gulp-query](https://github.com/gulp-query/gulp-query)

Delete files and folders

```text
npm install gulp-query gulp-query-clean
```

### Example
Paste the code into your `gulpfile.js` and configure it
```javascript
let build = require('gulp-query')
  , clean = require('gulp-query-clean')
;
cocktail(function (query) {
    query.plugins([clean])
      .clean('cache/**/*','cache')

      .clean(['public/css/admin.css/','css/undercover.css'])

      .clean({
        delete: [
          'public/css/*.css',
          'public/js/*.js',
           
           // we don't want to clean this file though so we negate the pattern
          '!public/js/jquery.js',
        ],
        name: 'main'
      })
      ;
});
```
And feel the freedom
```
gulp
gulp --production // For production
gulp clean // Only for clean
gulp clean:cache // Only for cache's task
gulp clean:admin clean:main watch // Watching change only for admin and main
...
```

### Options
```javascript
.clean({
    name: "task_name", // For gulp clean:task_name 
    delete: "clean/**/*", // ["clean/**/*", "clean2/**/*",...]
})
```