<h1 align="center">
  <br>
  <img src="https://miro.medium.com/max/661/1*TkP2EwaX95ItAv_jGS7hSA.png" width="400">
  <br>
  Lalavent - Backend
  <br>
</h1>

<p align="center">
  <img src="https://img.shields.io/badge/ExpressJs-v4.17.1-yellow">
  <img src="https://img.shields.io/badge/Axios-v0.19.2-blue">
  <img src="https://img.shields.io/badge/Sequelize-v5.21.6-important">
  <img src="https://img.shields.io/badge/Nodemailer-v6.4.6-red">
</p>

## Table of Contents
- [Prerequiste](#prerequiste)
- [Installation](#installation)
- [Contributing](#contributing)
- [Related Project](#related-project)
- [Contributors](#contributors)

## Prerequiste
- Sequelize - Download and Install [Sequelize](https://sequelize.org/)

## Installation
### Clone
1. Clone this repository
```
$ git clone https://github.com/ichvanul/lalavent.server.git
$ npm install
```
2. Create folder named config on the root directory
```
Inside the config folder, create a file named config.json
```
3. Copy paste the code down below to file config.json
```
{
  "development": {
    "username": "your database username",
    "password": "your database password",
    "database": "lalavent",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "your database username",
    "password": "your database password",
    "database": "lalavent",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "your database username",
    "password": "your database password",
    "database": "lalavent",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
```
5. Open your database
```
Create new database called "lalavent"
```
6. Run 
```
npx sequelize-cli db:migrate
```
7. Create file .env on your root directory
8. Copy paste this code to file .env
```
PORT = 5000
SECRET_KEY = 'Bismillah'
EMAIL = 'your email' (this email to send activate user to your account)
PASS = 'your password'
```
9. Start development server
```
$ npm run serve
```
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are greatly appreciated.

Fork the Project
1. Create your Feature Branch  ```git checkout -b [feature]```
2. Commit your Changes ```git commit -m 'Add some feature'```
3. Push to the Branch ```git push origin [feature]```
4. Open a Pull Request

## Related Project
* [`Lalaventt-Frontend-VueJs`](https://github.com/ichvanul/lalavent.client.git)

## Contributors

<center>
  <table>
    <tr>
      <td align="center">
        <a href="https://github.com/ichvanul">
          <img width="150" src="https://avatars1.githubusercontent.com/u/62008205?s=460&u=d23a93172c5e4c40b9b033e273a3359b2742c568&v=4" alt="Ichvanul Yulizar Putra"><br/>
          <b>Ichvanul Yulizar Putra</b>
        </a>
      </td>
      <td align="center">
        <a href="https://github.com/algol007">
          <img width="150" src="https://avatars3.githubusercontent.com/u/13137672?s=460&u=b5226ccdf4cd9c9a8505215b77b2a15d134d92b5&v=4" alt="Ady Rahmansyah"><br/>
          <b>Ady Rahmansyah</b>
        </a>
      </td>
      <td align="center">
        <a href="https://github.com/fblazt">
          <img width="150" src="https://avatars3.githubusercontent.com/u/48191467?s=460&u=c06616d146930100dfb5eb5c4ab10fd00d01ac41&v=4" alt="Firman"><br/>
          <b>Firman</b>
        </a>
      </td>
      <td align="center">
        <a href="https://github.com/shoelfikar">
          <img width="150" src="https://avatars0.githubusercontent.com/u/31173796?s=460&v=4" alt="Sulfikardi"><br/>
          <b>Sulfikardi</b>
        </a>
      </td>
      <td align="center">
        <a href="https://github.com/slucter">
          <img width="150" src="https://avatars2.githubusercontent.com/u/61655908?s=460&u=1e1c0b55b30cf502f264038f39609fd6dc8636b8&v=4" alt="Muhamad Irhashdianto"><br/>
          <b>Muhamad Irhashdianto</b>
        </a>
      </td>
    </tr>
  </table>
</center>

## Contact

If you want to contact me you can reach me at <ichvanulyp@gmail.com>
