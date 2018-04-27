import VueRouter from 'vue-router'
import MainComponent from './Components/main.vue'

const router = new VueRouter({
   
   routes : [
   
      {
         path: '',
         name: 'index',
         component: MainComponent
      },
      
      {
         path: "*",
         name: "invalid_path",
         component: { template: "<h1> ERROR 404 PAGE NOT FOUND </h1>" }
      }
   
   ], 
   
   mode : 'history'
   
});

export default router;