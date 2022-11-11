<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a name="readme-top"></a>


<h3 align="center">Books Collection</h3>



<!-- ABOUT THE PROJECT -->
## About The Project

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

* [![React][React.js]][React-url]
* [![Laravel][Laravel.com]][Laravel-url]
* [![Bootstrap][Bootstrap.com]][Bootstrap-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

Below are the prerequisites that you should have in your PC.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* nodejs & npm

* php ^8.0.2

* mysql server


### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/gabbymushi/books_collection.git
   ```
2. Inside a project folder, change directory to back-end and Install vendor packages
   ```sh
   composer install
   ```
3. Inside a project folder, change directory to front-end and Install NPM packages
   ```sh
   npm install
   ```

### Laravel server configuration
#### Inside a project folder, change directory to back-end and run the below commands

- Copy configuration
```sh
$ cp .env.example .env
```

- Make sure you have created database in your server/PC and then add database configuration in the .env as configure in your server/PC
```sh
  DB_CONNECTION=mysql
  DB_HOST=127.0.0.1
  DB_PORT=3306
  DB_DATABASE=
  DB_USERNAME=
  DB_PASSWORD=
```

- Generate application key and run migrations
```sh

$ php artisan key:generate
$ php artisan migrate
```


### Run the project

1. Inside a project folder, change directory to back-end and start the server
   ```sh
   php artisan serve
   ```
2. Inside a project folder, change directory to front-end and start the fron end
   ```sh
   npm start
   ```
3. The application will open on browser or you can acces it via
   ```sh
   http://localhost:3000/
   ```


<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/

[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
