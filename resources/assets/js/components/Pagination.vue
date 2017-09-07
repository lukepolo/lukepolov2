<template>

    <div class="Pagination" v-if="pagination && pagination.total">

        <div v-if="pagination.per_page">

            <div class="Pagination__info">
                Showing {{ pagination.from }} to {{ pagination.to }} of {{ pagination.total }} items
            </div>

            <div class="Pagination__buttons" v-if="lastPage !== 1">

                <a @click="goToPage(currentPage - 1)" :class="{disabled: currentPage == 1}">
                    Prev
                </a>

                <a :class="{current: currentPage == 1}" @click="goToPage(1)"> 1 </a>

                <span v-if="currentPage >= 5 && lastPage > 10">...</span>

                <a :class="{current: currentPage == page + 1}" @click="goToPage(page + 1)" v-for="page in centerPartPage">
                    {{ page + 1 }}
                </a>

                <span v-if="lastPage > 10 && lastPage - currentPage > 5">...</span>

                <a :class="{current: currentPage == page + 1}" @click="goToPage(page + 1)" v-for="page in lastPartPage">
                    {{ page + 1 }}
                </a>

                <a :class="{disabled: currentPage == lastPage}" @click="goToPage(currentPage + 1)">
                    Next
                </a>

            </div>

        </div>

    </div>
</template>

<script>
    export default {
        props : [
            'commit',
            'pagination',
        ],
        watch : {
            "pagination.per_page" : function(newPerPage, oldPerPage) {
                if(oldPerPage && newPerPage !== oldPerPage) {
                    this.goToPage(this.currentPage)
                }
            },
            'refresh' : function(value) {
                if(value) {
                    let page = this.currentPage > 0 ? this.currentPage : 1
                    this.goToPage(page)
                }
            }
        },
        methods: {
            goToPage(page) {

                if(page === 1 || (page !== 0 && page <= this.lastPage)) {


                    let paginationUrl = document.createElement('a')
                    paginationUrl.href =  this.pagination.path

                    let host = paginationUrl.hostname

                    if(window.location.port) {
                        host += ':'+window.location.port
                    }

                    let search = paginationUrl.search

                    search = search.replace(/(page=)\d+/, "$1"+page)

                    if(search.indexOf('?') === -1) {
                        search += '?page='+page
                    } else if(search.indexOf('page') === -1) {
                        search += '&page='+page
                    }

                    Vue.request().get(paginationUrl.protocol+'//'+host+paginationUrl.pathname+search, this.commit)
                }

            }
        },
        computed: {
            currentPage() {
                return this.pagination.current_page
            },
            lastPage() {
                return this.pagination.last_page
            },
            // This determines how we display the pagination such like 1 ... 6 7 8 ... 29
            centerPartPage() {
                if(this.lastPage > 10 && this.currentPage >= 5) {
                    if(this.lastPage - this.currentPage > 5) {
                        return this.currentPage === this.lastPage ? [this.currentPage - 3, this.currentPage - 2, this.currentPage - 1] : [this.currentPage - 2, this.currentPage - 1, this.currentPage];
                    }else {
                        const r = []

                        for(let i = this.lastPage - 7; i < this.lastPage; i++) {
                            r.push(i)
                        }
                        return r
                    }
                } else if(this.lastPage > 10) {
                    const r = []

                    for(let i = 1; i < 5; i++) {
                        r.push(i)
                    }
                    return r
                } else {
                    const r = []

                    for(let i = 1; i < this.lastPage; i++) {
                        r.push(i)
                    }
                    return r
                }
            },
            lastPartPage() {
                if(this.lastPage > 10 && this.lastPage - this.currentPage > 5) {
                    return [this.lastPage - 1]
                }
                return []
            },
        }
    }
</script>