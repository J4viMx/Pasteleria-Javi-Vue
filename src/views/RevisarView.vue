<template>
<section class=" d-flex flex-column align-items-center justify-content-center contenedor-revisar">
        
        <h2 class="margin-formulario">Revisar pedidos</h2>

        <Pedidos/>

        <h2 class="mt-5 pt-5">Inventario</h2>
        <h3>Sabores Disponibles</h3>

        <SaboresDisponibles/>

        <h3 class="mt-5">Adornos disponibles</h3>

        <AdornosDisponibles/>

    </section>

  <Footer/>
</template>

<script>

import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import SaboresDisponibles from '@/components/SaboresDisponibles.vue'
import AdornosDisponibles from '@/components/AdornosDisponibles.vue'
import Pedidos from '@/components/Pedidos.vue'

export default {
  name: 'HomeView',
  components: {
    Header,
    Footer,
    SaboresDisponibles,
    AdornosDisponibles,
    Pedidos
  }
}
</script>
