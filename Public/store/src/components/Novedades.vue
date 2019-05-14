<template>
<div class="container">
  <div class="card-group">
    <div class="card-deck" id="products">
      <div class="row">
        <div class="card">
          <img src="../assets/logo.png" class="card-img-top" alt="">
          <div class="card-body">
            <h5 class="card-title">$1000.00</h5>
            <p class="card-text">Producto n</p>
          </div>
          <div class="card-footer">
            <small class="text-muted">This card has supporting text below as a natural lead-in to additional content.</small>
          </div>
        </div>
        <div class="card">
          <img src="../assets/logo.png" class="card-img-top" alt="">
          <div class="card-body">
            <h5 class="card-title">$1000.00</h5>
            <p class="card-text">Producto n</p>
          </div>
          <div class="card-footer">
            <small class="text-muted">This card has supporting text below as a natural lead-in to additional content.</small>
          </div>
        </div>
        <div class="card">
          <img src="../assets/logo.png" class="card-img-top" alt="">
          <div class="card-body">
            <h5 class="card-title">$1000.00</h5>
            <p class="card-text">Producto n</p>
          </div>
          <div class="card-footer">
            <small class="text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus nemo dignissimos, autem at aliquam dolorum mollitia sed natus voluptatibus pariatur facilis ipsa, earum deleniti ut qui, molestias excepturi? Veniam, enim.</small>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Novedades',
  data () {
    return {
      info: null,
      loading: true,
      errored: false
    }
  },
  created() {
    axios.get(`http://localhost:3000/api/products`)
    .then(response => {
      // JSON responses are automatically parsed.
      console.log(response.data)
      this.posts = response.data
    })
    .catch(e => {
      this.errors.push(e)
    })
  }
};


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card-img-top{
  object-fit: cover;
  height: 170px;
}

.card{
  height: 350px;
  -webkit-box-shadow: -2px 3px 11px 1px rgba(0,0,0,0.25);
  -moz-box-shadow: -2px 3px 11px 1px rgba(0,0,0,0.25);
  box-shadow: -2px 3px 11px 1px rgba(0,0,0,0.25);
  -webkit-transition: 0.15s ease-out;
  -moz-transition: 0.15s ease-out;
  -o-transition: 0.15s ease-out;
  transition: 0.15s ease-out;
  border-radius: 5px;
}

.card div:last-child {
  margin:0;
  height: 0px;
  padding: 0;
  font-size: 0px;
  -webkit-transition: 0.15s ease-out;
  -moz-transition: 0.15s ease-out;
  -o-transition: 0.15s ease-out;
  transition: 0.15s ease-out;
}
.card:hover > div:last-child {
  height: 70px;
  font-size: 15px;
  -webkit-transition: 0.15s ease-out;
  -moz-transition: 0.15s ease-out;
  -o-transition: 0.15s ease-out;
  transition: 0.15s ease-out;
}
.card:hover{
  -webkit-box-shadow: -2px 3px 11px 1px rgba(0,0,0,0.75);
  -moz-box-shadow: -2px 3px 11px 1px rgba(0,0,0,0.75);
  box-shadow: -2px 3px 11px 1px rgba(0,0,0,0.75);
  -webkit-transition: 0.15s ease-out;
  -moz-transition: 0.15s ease-out;
  -o-transition: 0.15s ease-out;
  transition: 0.15s ease-out;
}

</style>