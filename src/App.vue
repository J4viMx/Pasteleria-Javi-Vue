<template>
  <Header/>
</template>

<script>

import Header from '@/components/Header.vue'

export default {
  name: 'HomeView',
  components: {
    Header
  }
}
</script>

<style>
html {
    box-sizing: border-box;
    font-size: 62.5%;
 }
*, *:before, *:after {
    box-sizing: inherit;
    margin: 0;
 }  

 body{
    font-family: 'Pacifico', cursive;
    font-size: 1.6rem;
    line-height: 2;
 }

h1,h2,h3{
    margin: 0 0 5rem 0;
}

h1{
    font-size: 5rem;
}

h2{
    font-size: 4rem;
}

h3{
    font-size: 3rem;
}




.lista-ul{
    list-style: none;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  
  .lista-ul li{
    display: inline-block;
    margin-top: 5px;
  }
  
  .lista-ul li a{
    text-decoration: none;
    color: white;
    font-weight: 300;
    font-size: 1.8rem;
  }
  
  .menu-navegacion{
    height: 116px;
    width: 100%;
    background-color: rgba(255, 192, 203, 0.767);
    transition: all .3s;
  }
  
  .margin-top-menu{
    /* padding-top: 40px; */
    transition: all .3s;
  }
  
  .logo-menu{
    max-width: 100px;
    transition: all .4s;
  }
  
  
  #icon{
    width: 50px;
    margin-left: 20px;
    margin-top: 20px;
    float: left;
    cursor: pointer;
    display: none;
  }
  
  #icon img{
    width: 100%;
  }
  
  @media (max-width: 909px) {
      #icon{
        display: block;
      }
      .lista-ul{
        position: fixed;
        width: 100%;
        height: 100vh;
        background-color: rgba(255, 192, 203, 0.795);
        top: 100px;
        left: -100%;
        text-align: center;
        flex-direction: column;
        transition: all .5s;
      }
  
      .lista-ul-scroll{
        top: 70px;
      }
  
      .lista-ul.show{
        left: 0;
      }
  
      .logo-oculto{
        display: block;
        margin: 0 calc(50% - 30px);
      }
  }


  .contenedor-pastel{
      width: 100%;
      min-height: 100vh;
      background-image: url(assets/img/pastel-1.jpg);
      background-repeat: no-repeat;
      background-position: center center;
      background-size: cover;
  }

  .contenedor-pastel-elementos{
    min-height: 100vh;
  }


  .contenedor-pastel-slogan{
    font-size: 1.9rem;
  }

  .btn-rosita{
    background-color: rgba(255, 192, 203, 0.801);
    border-radius: 20px;
    border: 1px solid white;
    padding: 1rem 10rem;
    font-size: 2rem;
  }

  .lista-ul li a:hover{
    border-bottom: 2px solid white;
  }

  .active-border{
    border-bottom: 2px solid white;
  }


  /* Seccion galeria */

  .body-galeria{

  height: 100vh;
  }

  .galeria-titulo{
    margin-top: 5rem;
    color: gray;
  }

  .contenedor-img-galeria{
    position: relative;
    overflow: hidden;  
  }

  .precio-pastel{
    position: absolute;
    background-color: rgba(0, 0, 0, 0.24);
    color: white;
    width: 100%;
    height: 100%;
    top: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all .3s;
  } 

  .contenedor-img-galeria:hover .precio-pastel{
    top: 0;
  }

  .imagen-adornos,
  .img-galeria{
    width: 213px;
    height: 213px;
  }

  /* Cierre seccion galeria */



  /* Seccion pedido */

  .contenedor-pedido{
    width: 100%;
    min-height: 100vh;
    background-image: url(assets/img/pastel-2.jpg);
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
  }

  .contenedor-formulario{
    background-color: rgba(0, 0, 0, 0.404);
    width: 40%;
  }
  .input-formulario,
  textarea{
    width: 60%;
    margin-bottom: 1rem;
    border-radius: 2rem;
    border: none;
    background-color: rgba(255, 255, 255, 0.404);
    color: white;
  }

  @media (max-width: 768px) {
    .contenedor-formulario{
      width: 90%;
    }
  }

  .checkbox{
    border-radius: 2rem;
    border: none;
    background-color: rgba(255, 255, 255, 0.404);
    color: white;
  }

  .margin-formulario{
    margin-top: 10rem;
    border-radius: 2rem;
  }

  .input-formulario{
    margin: 0;
  }

  /*Cierre Seccion pedido */

  footer{
    background-color: rgba(255, 192, 203, 0.479);
    color: rgb(139, 139, 139);
    padding: 1rem;
  }


  /* Pedido */
  
  .contenedor-revisar{
    width: 100%;
    min-height: 100vh;
  }

  table{
    background-color: rgba(255, 192, 203, 0.479);
    font-family: Arial, Helvetica, sans-serif;
    width: 60%;
    text-align: center;
  }
  @media (max-width: 768px) {
      table{
        width: 90%;
      }
  }

  thead{
    background-color: rgba(250, 160, 175, 0.479);
    font-weight: 700;
  }

  th{
    padding: 1rem 0;
  }

  /*Fin Pedido */
  
  footer{
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media (min-width: 768px) {
      
      footer{
        flex-direction: row;
        justify-content: space-around;
      }
    
  }

</style>
