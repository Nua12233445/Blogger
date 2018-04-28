<template>
<div class="container">
  <head>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css" integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4" crossorigin="anonymous">
  </head>
  <body><br>
   <div class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow">
    <h2 class="my-0 mr-md-auto font-weight-normal">Blogger</h2>
    <nav class="my-2 my-md-0 mr-md-3">
      <a class="btn btn-outline-success" href="#"> Admin Login </a>
    </nav> 
   </div> <br>
   
   <div v-for="post in posts">
   <div class="card">
      <h5 class="card-header">12/11/13</h5>
      <div class="card-body">
         <h5 class="card-title"><strong>{{post.title}}</strong></h5>
         <p class="card-text">By <strong>{{post.author}}</strong></p>
         <a href="#" class="btn btn-primary">Go To Post</a>
      </div>
   </div><br>
   </div>
 </body>
</div>
</template>

<script>

import HeaderComponent from './header.vue'

export default {

   data() {
      return {
         message : "Hello World",
         posts : [
            {
               title: 'Walking in the woods',
               author: 'Asaad Noman Abbasi',   
            },
            
            {
               title: 'Walking in the forest',
               author: 'Noman Abbasi',
            },
         ]
      }
   },

   components : {
      'HeaderComponent' : HeaderComponent
   },
   
   created() { 
      console.log("On Create Main POSTS");
   }
}

</script>