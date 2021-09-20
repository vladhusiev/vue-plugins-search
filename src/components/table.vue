<template>
    <div>
        <div class="table-responsive">
            <table class="table table-bordered">
                <thead>
                    <tr>
                        <td>Type</td>
                        <td>Name</td>
                        <td>Hits</td>
                    </tr>
                </thead>
                <tbody>
                    <tr @click="fetchPackageDetails(item)" v-for="item in paginate" :key="item.name" data-bs-toggle="modal" data-bs-target="#modalDetails">
                        <td>{{ item.type }}</td>
                        <td>{{ item.name }}</td>
                        <td>{{ item.hits }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div v-if="totalPages > 1" class="page__wrapper">
            <div
                v-for="pageNumber in totalPages"
                :key="pageNumber"
                class="page"
            >   
                <a v-bind:key="pageNumber" href="#" @click="changePage(pageNumber)">
                    {{ pageNumber }}
                </a>
                
            </div>
        </div>
    </div>
</template>
<script>
import { mapState, mapActions, mapMutations } from 'vuex'
export default {
    methods: {
        ...mapMutations({
            setPage: 'packages/setPage',
            setResultCount: 'packages/setResultCount'
        }),
        ...mapActions({
            fetchAllData: 'packages/fetchAllData',
            fetchPackageDetails: 'packages/fetchPackageDetails'
        }),
        changePage(pageNumber) {
            this.setPage(pageNumber); 
            
        }
    },
    mounted() {
        this.fetchAllData()
    },
    computed: {
        ...mapState({
            allPackages: state => state.packages.allPackages,
            packageDetails: state => state.packages.packageDetails,
            page: state => state.packages.page,
            limit: state => state.packages.limit,
            totalPages: state => state.packages.totalPages,
            resultCount: state => state.packages.resultCount,
        }),
        paginate: function() {
            if (!this.allPackages || this.allPackages.length != this.allPackages.length) {
                return
            }
            this.setResultCount(this.allPackages.length)
            if (this.page >= this.totalPages) {
              this.setPage(this.totalPages)
            }
            let index = this.page * this.limit - this.limit
            return this.allPackages.slice(index, index + this.limit)
        }
    }
}
</script>
<style lang="scss" scoped>
    .table-responsive tr {
        cursor: pointer;
    }
    .page__wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .page {
        border: 1px solid #ccc;
        cursor: pointer;
    }
    .page > a {
        padding: 5px 10px;
        display: block;
        min-width: 32px;
        text-align: center;
        color: #000;
        text-decoration: none;
    }
    .page > a:hover {
        background: #000;
        color: #fff;
    }
    .page:not(:last-child) {
        margin-right: 10px;
    }
</style>