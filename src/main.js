import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


createApp(App).use(store).use(router).mount('#app')



const hamburguer = document.querySelector('#hamburguesa');
const menu = document.querySelector('.lista-ul');
const tamanomenu = document.querySelector('.menu-navegacion');
const logomenu = document.querySelector('.logo-menu');
const marginTopMenu = document.querySelectorAll('.margin-top-menu');

hamburguer.addEventListener('click', ()=>{
    menu.classList.toggle("show");
});


