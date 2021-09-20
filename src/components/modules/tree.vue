<template>
    <tree-view  id="my-tree" :model="dataModel"></tree-view>
</template>
<script>
import {mapState} from 'vuex'
import TreeView from "@grapoza/vue-tree"
export default {
    data() {
        return {
            dataModel: [
                {id: "numberOrString", label: "Root Node", children: [
                {id: 1, label: "Child Node"},
                {id: "node2", label: "Second Child"}]
                }]
            }
    },
    components: {
       TreeView
    },
    methods: {
    },
    computed: {
        ...mapState({
            packageDetailsFiles: state => state.packages.packageDetailsFiles
        })
    }
}
</script>
<style lang="">
    
</style>