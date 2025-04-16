//single page application
//
// We need to work on -
// 1. TRnsplication - converting all the ES6, React, Redux, ect code to core js
    //--Babel
// 2. Dependency Resolution - loading the dependent file needed before the current file executed
    //--Webpack by itself
// 3. Shimining / Fallback - imiplementing the feature by using third party library which is note present on current browser
    //--Webpack by itself
// 4. Minification - extra lines, commented code, spaces give improvement in file size
    //--Minify
// 5. Code optimization - true?adsfds:dafds
    // if(){
    //     // do something
    // }else{
    //     // do something else
    // }
    // var something = something
    // a1
        //--Optimize or Webpack by itself
// 6. Image Resizing - reducing the number of calls by converting image into a base64 encoding and not fetching from the server
    // npmjs module
// 7. CSS Files - resolving and using css files and loading them on bundle
    // css module
// 8. Creating - 1 common bundle for html, js and css + media
    // Webpack by itself

//All these tasks can be done by Task Runner => Gulp, Grunt, Bower(css, media), Webpack

//App hosting => Webpack, IIS, Tomcat/Apache, Express, ect
//Local hot reloading (by cashing) => Webpack, IIS, Tomcapt/Apache, Express, ect

//