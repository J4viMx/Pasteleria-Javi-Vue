<template>
      <section class="">
        <div class="contenedor-pastel">
            <div class="contenedor-pastel-elementos contenido-pagina-pricipal">
                <h1 class="contenedor-pastel-titulo">Bienvenido a la pasteleria Javi</h1>
                <p class="contenedor-pastel-slogan padding-5-y">Aquí Haremos el Pastel de tus Sueños Realidad</p>
                <a href="galeria.html" class="btn btn-rosita mt-5 color-negro">Más info</a>
            </div>

        </div>
    </section>

  <Footer/>
</template>

<script>

import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'HomeView',
  components: {
    Header,
    Footer
  }
}
</script>

<style>
  .contenido-pagina-pricipal{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .padding-5-y{
    padding-top: 2rem;
    padding-bottom: 2rem;
  }

  .mt-5{
    margin-top: 2rem;
  }

  a{
    text-decoration: none;
  }

  .color-negro{
    color: #000;
    font-weight: 700;
  }
</style>