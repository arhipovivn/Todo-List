<template>
<div class="desktop-layout" id="app" data-app>
    <div class="wrapper-content">
        <nuxt />
    </div>
</div>
</template>

<script>
export default {
    name: 'DesktopLayout',
    data() {
        return {
            myData: 'данные из шаблона'
        }
    },
    mounted() {},
    components: {}
}
</script>

<style scoped>
.desktop-layout {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(304deg, #F0C3FC -53.74%, #D7BEFC -4.64%, #BCB1FC 40.96%, #A1AEFC 83.05%, #94BDFC 127.47%, #8EC5FC 170.73%), linear-gradient(0deg, #84FAB0 0%, #85F9BC 21.87%, #88F8D7 42.19%, #8BF6F5 60.94%, #8EDDF5 80.73%, #8FD3F4 100%);
}
</style>
