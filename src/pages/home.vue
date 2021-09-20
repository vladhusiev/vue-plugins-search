<template>
    <main>
        <div class="container">
            <div class="col-12">
                <SearchBlock></SearchBlock>
            </div>
            <div v-if="allPackages.length > 0" class="col-12 table-block">
                <h3 class="table-title">Packages:</h3>
                <Table></Table>
            </div>
            <div v-else class="col-12 error-block">
                <img src="../../public/img/not-found.png" alt="">
                <h3 class="table-title">Nothing found...</h3>
            </div>
            <div class="modals">
                <Modal>
                    <template v-slot:rank>
                        {{ packageDetails.rank }}
                    </template>
                    <template v-slot:total>
                        {{ packageDetails.total }}
                    </template>
                    <template v-slot:versions>
                        <div @click="fetchPackageDetailsVersion({package: packageDetails, version: version})" class="version-item" v-for="(value, version) in packageDetails.versions" :key="version">
                            {{ version }}
                        </div>
                    </template>
                    <template v-slot:files>
                        <div v-if="packageDetailsFile.length === 0">
                            No info :(
                        </div>
                        <div v-else>
                            {{ packageDetailsFile }}
                        </div>
                    </template>
                </Modal>
            </div>
        </div>
    </main>
    
</template>
<script>
import SearchBlock from '@/components/searchBlock.vue'
import Table from '@/components/table.vue'
import Modal from '@/components/modules/modal.vue'
import Tree from '@/components/modules/tree.vue'
import { mapState, mapActions } from 'vuex'
export default {
    components: {
        SearchBlock, Table, Modal, Tree
    },
    computed: {
        ...mapState({
            allPackages: state => state.packages.allPackages,
            packageDetails: state => state.packages.packageDetails,
            packageDetailsFile: state => state.packages.packageDetailsFile
        })
    },
    methods: {
        ...mapActions({
            fetchPackageDetailsVersion: 'packages/fetchPackageDetailsVersion'
        })
    }
}
</script>
<style lang="scss">
    .table-title {
        margin-bottom: 10px;
        text-align: center;
    }
    .version-item {
        border: 1px solid #ccc;
        padding: 3px 8px;
        margin-right: 5px;
        margin-bottom: 5px;
        cursor: pointer;
    }
    .version-item:hover {
        background: #000;
        color: #fff;
        border: 1px solid transparent
    }
    .error-block, .table-block {
        height: 509px;
        max-height: 509px;
    }
    .error-block {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
    .error-block img {
        display: block;
        max-width: 200px;
        margin-bottom: 50px;
    }
</style>