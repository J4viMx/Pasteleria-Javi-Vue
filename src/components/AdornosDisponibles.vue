
<template>

        <table class="mb-5">
            <thead>
                <tr>
                    <td>Adorno</td>
                    <td>Cantidad</td>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(adorno, index) in $store.state.Adornos" :key="index">
                    <th>{{adorno.nombre}}</th>
                    <th>{{adorno.cantidad}}</th>
                </tr>
            </tbody>
        </table>


</template>

<script>
export default {
  name: 'AdornosDisponibles',
  
}
</script>
