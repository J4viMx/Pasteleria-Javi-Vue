<template>

    <Pasteles/>
    <Adornos/>

  <Footer/>
</template>

<script>

import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import Pasteles from '@/components/Pasteles.vue'
import Adornos from '@/components/Adornos.vue'

export default {
  name: 'HomeView',
  components: {
    Header,
    Footer,
    Pasteles,
    Adornos
  }
}
</script>


<style>
    .d-flex{
        display: flex;
    }
    .justify-content-center{
        justify-content: center;
    }
    .flex-column{
        flex-direction: column;
    }
    .align-items-center{
        align-items: center;
    }
    .container-xl{
        width: 80%;
    }
    .mb-5{
        margin-bottom: 3rem;
    }
    .border{
        border: 1px solid rgb(156, 148, 148);
    }
    .row{
        display: flex;
    }
    .justify-content-around{
        justify-content: space-around;
    }
    .pt-5{
        padding-top: 2rem;
    }
    .text-center{
        text-align: center;
    }
    .mx-auto{
        margin: 0 auto;
    }


</style>