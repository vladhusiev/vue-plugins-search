import axios from 'axios'

export const packagesModule = {
    state: () => ({
        allPackages: [],
        packageDetails: [],
        packageDetailsFile: '',
        page: 1,
        limit: 10,
        totalPages: 0,
        resultCount: 0,
        searchQuery: '',
    }),
    getters: {
    },
    mutations: {
        setPackages(state, packages) {
            state.allPackages = packages
        },
        setPackageDetails(state, packageDetails) {
            state.packageDetails = packageDetails
        },
        setPackageDetailsFile(state, packageDetailsFile) {
            state.packageDetailsFile = packageDetailsFile
        },
        setTotalPages(state, totalPages) {
            state.totalPages = totalPages
        },
        setPage(state, page) {
            state.page = page
        },
        setSearchQuery(state, searchQuery) {
            state.searchQuery = searchQuery
        },
        setResultCount(state, resultCount) {
            state.resultCount = resultCount
        }
    },
    actions: {
        async fetchAllData({state, commit}) {
            try {
                if (state.searchQuery.length === 0) {
                    commit('setPackages', [])
                    return
                }
                const res = await axios.get('https://data.jsdelivr.com/v1/stats/packages')
                const searchedData = res.data.filter(item => item.name.toLowerCase().includes(state.searchQuery.toLowerCase()))
                commit('setTotalPages', Math.ceil(searchedData.length / state.limit))
                commit('setPackages', searchedData)
            } catch(e) {
                alert('Ошибка')
                
            }
        },
        async fetchPackageDetails({state, commit}, {type, name}) {
            try {
                state.packageDetailsFile = ''
                const url = `https://data.jsdelivr.com/v1/package/${type}/${name}/stats`
                const res = await axios.get(url)
                let tempObj = res.data
                tempObj.type = type
                tempObj.name = name
                commit('setPackageDetails', tempObj)
            } catch(e) {
                alert('Ошибка полиси в хроме, в других браузерах все отлично :)')
            }
        },
        async fetchPackageDetailsVersion ({state, commit}, object) {
            try {
                const url = `https://data.jsdelivr.com/v1/package/${object.package.type}/${object.package.name}@${object.version}`
                const res = await axios.get(url)
                commit('setPackageDetailsFile', res.data.default);
            } catch(e) {
                alert('Данных не найдено :(')
            }
        }
    },
    namespaced: true
}