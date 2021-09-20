<template>
    <div class="search-block">
        <h1 class="search-block-title">Plugin Search</h1>
        <div class="input-group">
            <my-input :model-value="searchQuery" @update:model-value="setSearchQuery" class="form-control" placeholder="Start typing..."></my-input>
        </div>
    </div>
</template>

<script>
import {mapState, mapMutations} from 'vuex'
import MyInput from '@/components/modules/myInput'
export default {
    components: {
        MyInput
    },
    methods: {
        ...mapMutations({
            setSearchQuery: 'packages/setSearchQuery',
        }),
    },
    computed: {
        ...mapState({
            searchQuery: state => state.packages.searchQuery
        })
        
    },
}
</script>

<style lang="scss">
    .search-block {
        max-width: 320px;
        margin: 0 auto 25px;
        padding-top: 25px;
    }
    .search-block-title {
        margin-bottom: 10px;
        text-align: center;
    }
</style>