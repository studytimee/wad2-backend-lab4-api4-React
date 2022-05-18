# Assignment 2 - Web API.

Name: Abid Ali

### Overrview.

+ Web API Design (Express routing, Parameterised URLs)
+ Express Framework (Routers, Controllers, Services, Entities and Repositories)
+ Validation using JOI, Jason WEB Token, Password validation and encryption.
+ Registration and authentication of user account, authentication on routes. 
+ React API Integration, react authentication context.
+ Proxy routes to custom design api's
+ Private Routes: 6 Private routing

## Installation Requirements

Describe what needs to be on the machine to run the API (Node v?, NPM, MongoDB instance, any other 3rd party software not in the package.json). 

__Git Commands__
```bat
git install
git clone https://github.com/studytimee/wad2-moviesApp-MERN.git
```

__Node Package Manager (npm) Commands__
```bat
npm install
Install the npm in the project root folder and reactApp folder.
```
![][npm_install]

__Server Proxy__
```bat
"proxy": "http://localhost:8080"
Make sure server proxy added in the package.json file
```
![][package_proxy]


__Software Versions__                                    
```bat
| node --version                                            |
|   v16.14.0                                                |
| npm --version                                             |
|   8.3.1                                                   |
| C:\Program Files\MongoDB\Server\5.0\bin>mongod --version  |
|   db version v5.0.6                                       |
|                                                           |
```

__Node Packages__
```bat
| Install node.js  (v16.14.0)                                     |
| npm install --save-dev babel-cli                                |
| npm install -g babel-cli                                        |
| npm install --save-dev babel-preset-env                         |
| npm install --save-dev nodemon                                  |
| npm install dotenv --save                                       |
| npm install --save-dev eslint babel-eslint                      |
| npx eslint index.js                                             |
| install postman in your machine                                 |
| npm install --save uniqid                                       |
| npm install -save axios                                         |
| npm install -save mongoose                                      |
| npm install -save joi                                           |
| npm install --save passport passport-jwt jsonwebtoken bcryptjs  |
| npm install --save-dev newman                                   |
| npm install --save-dev newman-reporter-htmlextra                |
```

__Create files in the root directory__                          
```bat
| create a file called .babelrc in the root folder                |
|   enter in the following:                                       |
|   {                                                             |
|   "presets": ["env"]                                            |
|   }                                                             |
|                                                                 |
|                                                                 |
```



## API Configuration
__Add - .env File .__
Add .env file in the project root directory.
![][dot_env]



## Start-up
Describe how to start/stop the API. You could go though the ``scripts:`` property of the *package.json* file.

## API Design
Give an overview of your web API design. If you have your design in Swagger, you can link it or you could use ``npx swagger-markdown -i ./your_swagger_file.yaml`` to generate a markdown version of it. 

[SwaggerHub Doc](https://app.swaggerhub.com/apis-docs/fxwalsh/MovieeAPI/1.0)

Alternatively, you could also do similar to the following: 

| PATH                          | GET                       | POST                          | PUT  | DELETE |
| ----------------------------- | ------------------------- | ----------------------------- | ---- | ------ |
| /api/movies                   | Gets a list of movies     | Add A Movie                   | N/A  | N/A    |
| /api/movies/{movieid}         | Get a Movie               | N/A                           | N/A  | N/A    |
| /api/movies/{movieid}/reviews | Get all reviews for movie | Create a new review for Movie | N/A  | N/A    |
| ...                           | ...                       | ...                           | ...  | ...    |

## Security and Authentication

.. Give details of any authentication/ security implemented on the API. Indicate which routes are protected.

### Design

.. Give details of the database you used and the Collections. Highlight any extra work you did, for example new Mongo Collections/Entities/Services/Controllers and routers or any changes/additions to existing components.


## Integrating with React App

Describe how you integrated your React app with the API. Perhaps link to the React App repo and give an example of an API call from React App. For example: 

~~~Javascript
export const getMovies = () => {
  return fetch(
     '/api/movies',{headers: {
       'Authorization': window.localStorage.getItem('token')
    }
  }
  )
    .then(res => res.json())
    .then(json => {return json.results;});
};

~~~

## Extra features

. . Briefly explain any non-standard features, functional or non-functional (e.g. user registration, authentication) developed for the app  

## Independent learning.

. . State the non-standard aspects of React/Express/Node (or other related technologies) that you researched and applied in this assignment . .  






[dot_env]: https://i.imgur.com/b5RgNyg.png
[dot_env_reactApp]: https://i.imgur.com/Ey1xmwh.png


[start_reactApp]: https://i.imgur.com/uMrQOJm.png
[start_backend]: https://i.imgur.com/Jazg7Nd.png
[start_test]: https://i.imgur.com/XSaCWY2.png
[test_report]: https://i.imgur.com/1M2Q7GT.png

[private_route]: https://i.imgur.com/ph45gt1.png

[npm_install]: https://i.imgur.com/OYZltcD.png
[package_proxy]: https://i.imgur.com/JpAhgYN.png



[API-integration]: ./images/API_Integration-5.png
[hashed-before-saved]: ./images/encrypted-password.png
[design_add_movieId_in_fav]: ./images/00_add_movieId_into_Favourite.png
