<template>
    <div class="wrapper">
        <router-view></router-view>
        <Footer></Footer>
    </div>
    
</template>

<script>

import Footer from '@/components/footer.vue'
export default {
    components: {
        Footer  
    }
}

</script>

<style lang="scss">
    .wrapper {
        min-height: 100vh;
        width: 100%;
        background: #fafafa;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
</style>
