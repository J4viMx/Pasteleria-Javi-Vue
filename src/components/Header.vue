
<template>

    <header>
        <nav class="menu-navegacion">
            <ul class="lista-ul">
                <li class="margin-top-menu"><router-link to="/"><img class="logo-menu" src="../assets/img/logo_pasteleria.png" alt="Logo Pasteles Javi"></router-link></li>
                <li class="margin-top-menu"><router-link to="/">Home</router-link></li>
                 <li class="margin-top-menu"><router-link to="/galeria">Sabores y Accesorios</router-link></li>
                <li class="margin-top-menu"><router-link to="/pedido">Haz tu pedido</router-link></li>
                <li class="margin-top-menu"><router-link to="/revisar">Revisar pedidos</router-link></li>
                
            </ul>

                <label id="icon">
                    <img id="hamburguesa" src="../assets/img/list.svg" alt="menu hamburguesa">
                </label>
            <router-view/>    
        </nav>


    </header>


</template>

<script>
export default {
  name: 'Header',
  
}
</script>


