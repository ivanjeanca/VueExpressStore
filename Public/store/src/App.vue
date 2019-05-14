<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-dark nav">
      <router-link to="/" class="navbar-brand">
        <img src="./assets/logon.png" alt="SaveWare" height="20px"/>
      </router-link>
      <ul class="navbar-nav mr-auto full-width">
        <li class="nav-item ancho-busqueda">
          <form class="form-inline">
            <input class="search-form" type="search" placeholder="Search" aria-label="Search">
            <button class="btn search-button" type="submit">Search</button>
          </form>
        </li>
      </ul>
      <div class="collapse navbar-collapse" id="navbarText">
      </div>
    </nav>
    <nav class="navbar navbar-expand-lg navbar-dark nav2">
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        <span> Ver más</span>
      </button>
      <div class="collapse navbar-collapse text-left" id="navbarColor01">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <router-link to="/" class="nav-link">Inicio</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about" class="nav-link">Acerca de...</router-link>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle dropdown-width" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Categorías
            </a>
            <div class="dropdown-menu dropdown-width" aria-labelledby="navbarDropdownMenuLink" v-if="categories.valid == 1">
              <router-link v-for="category in categories.data" :key="category.id_category" class="dropdown-item" to="/products" >{{ category.category }}</router-link>
            </div>
          </li>
        </ul>
        <ul class="navbar-nav">
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle dropdown-login login" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Cuenta
            </a>
            <div class="dropdown-menu dropdown-login" aria-labelledby="navbarDropdownMenuLink">
              <a class="dropdown-item" href="#">Iniciar Sesión</a>
              <a class="dropdown-item" href="#">Registrarte</a>
            </div>
          </li>
        </ul>
      </div>
      <router-link to="/cart" class="cart"><img src="./assets/shopping-cart.svg" alt="shop" ></router-link>
    </nav>
    <router-view/>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data () {
    return {
      categories: [],
      errors: []
    }
  },
  created() {
    axios.get(`http://localhost:3000/api/categories`)
    .then(response => {
      // JSON responses are automatically parsed.
      this.categories = response.data
      console.log(this.categories)
    })
    .catch(e => {
      this.errors.push(e)
    })
  }
}
</script>


<style>
@import url('https://fonts.googleapis.com/css?family=Raleway:400|Open+Sans:500');
#app {
  font-family: 'Raleway', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #033B30;
}

.nav{
  font-family: 'Open Sans', sans-serif;
  padding: 0;
  margin: 0;
  padding-top: 10px;
  background-color: #135649;
  color: #94d3c6;
}

.nav2{
  font-family: 'Open Sans', sans-serif;
  padding: 0px 0px 0px 174px;
  background-color: #135649;
  color: #94d3c6;
  border-radius: 0px 0px 10px 10px;
}

.navbar-brand{
  padding-left: 15px;
  margin-right: 15px;
}

#navbarColor01 a {
  color: #94d3c6;
  background-color: #135649;
  padding: 15px;
  -webkit-transition: 0.5s ease-out;
  -moz-transition: 0.5s ease-out;
  -o-transition: 0.5s ease-out;
  transition: 0.5s ease-out;
}

#navbarColor01 a.router-link-exact-active {
  color: #b0f5e7;
  background-color: #033B30;
}

#navbarColor01 a:hover {
  color: #94d3c6;
  background-color: #033B30;
  -webkit-transition: 0.5s ease-out;
  -moz-transition: 0.5s ease-out;
  -o-transition: 0.5s ease-out;
  transition: 0.5s ease-out;
}

.form-inline{
  padding-right: 0px;
  margin-left: 0px;
  width: 100%;
}

.search-form{
  border: aquamarine solid 0px;
  background-color: whitesmoke;
  color: #2c3e50;
  border-radius: 10px 0px 0px 0px;
  margin-left: 20px;
  padding: 0px 10px;
  width: 80%;
  height: 40px;
}

.ancho-busqueda{
  width:100%;
}

.full-width{
  width: 65%;
}

.search-button{
  background-color: #49897D;
  color: #033B30;
  border-radius: 0px 10px 10px 0px;
  margin: 0;
  padding: 0px 10px;
  height: 40px;
}

.search-button:hover {
  background-color: #73A69C;
  color: #135649;
}

.login{
  font-weight: 600;
  margin-right: 50px;
}

.dropdown-width{
  width: 200px;
}

.dropdown-menu{
  padding: 0;
  margin: 0;
  border: 0px;
}

.dropdown-login{
  width: 170px;
}

.dropdown-item:last-child{
  border-radius: 0px 0px 20px 20px;
}

.cart{
  position: fixed;
  border: #9de5d7 solid 1px;
  background-color: #296F61;
  border-radius: 30px;
  right: 25px;
  top: 10px;
  height: 60px;
  width: 60px;
  padding: 10px;
  -webkit-transition: 0.5s ease-out;
  -moz-transition: 0.5s ease-out;
  -o-transition: 0.5s ease-out;
  transition: 0.5s ease-out;
  z-index: 2000;
}

.cart:hover{
  background-color: #033B30;
  -webkit-transition: 0.5s ease-out;
  -moz-transition: 0.5s ease-out;
  -o-transition: 0.5s ease-out;
  transition: 0.5s ease-out;
}

/* Small devices (landscape phones, 576px and up) */
@media (max-width: 576px) {
  .form-inline{
    text-align: center;
    margin: 0px 10px;
  }
  .nav{
    padding: 10px 0px 0px 0px;
    margin: 0;
  }
  .nav2{
    padding: 0px 0px 10px 0px;
    margin: 0;
  }
  .navbar-toggler{
    margin-left: 10px;
  }
  .search-form{
    margin-left: 0px;
    width: 80%;
  }
  .ancho-busqueda{
    width:100%;
  }
  .full-width{
    width: 100%;
  }
  #nav{
    padding: 7px 0px;
    margin: 0;
  }
  .navbar-toggler{
    margin-right: 10px;
  }
  .dropdown-item:last-child{
    border-radius: 0px 0px 0px 0px;
  }
  .cart{
    right: 20px;
    top: 100px;
  }
}

/* Medium devices (tablets, 768px and up) */
@media (min-width: 577px) and (max-width: 768px) {
  .form-inline{
    text-align: left;
    margin: 0px 10px;
  }
  .nav{
    padding: 10px 0px 0px 0px;
    margin: 0;
  }
  .nav2{
    padding: 0px 0px 10px 0px;
    margin: 0;
  }
  .navbar-toggler{
    margin-left: 164px;
  }
  #nav{
    padding: 7px 0px;
    margin: 0;
  }
  .navbar-toggler{
    margin-right: 10px;
  }
  .search-form{
    margin-left: 0px;
    width: 80%;
  }
  .ancho-busqueda{
    width:100%;
  }
  .full-width{
    width: 70%;
  }
  .dropdown-item:last-child{
    border-radius: 0px 0px 0px 0px;
  }
  .cart{
    right: 20px;
    top: 60px;
  }
}

/* Large devices (desktops, 992px and up) */
@media (min-width: 769px) and (max-width: 991.5px) {
  .form-inline{
    margin: 0px 10px;
  }
  .nav{
    padding: 10px 0px 0px 0px;
    margin: 0;
  }
  .nav2{
    padding: 0px 0px 10px 0px;
    margin: 0;
  }
  .navbar-toggler{
    margin-left: 164px;
  }
  .search-form{
    margin-left: 0px;
    width: 85%;
  }
  .ancho-busqueda{
    width:100%;
  }
  .full-width{
    width: 78%;
  }
  .dropdown-item:last-child{
    border-radius: 0px 0px 0px 0px;
  }
  .cart{
    right: 20px;
    top: 60px;
  }
}
</style>
