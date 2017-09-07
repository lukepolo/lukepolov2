<template>
    <div class="container blog-container">
        <div class="col-md-10">
            <div class="row" v-if="form.filters.length">
                <a class="label clear-filter" @click="clearFilters">Clear Filters</a>
            </div>

            <blog-card :blog="blog" v-for="blog in blogs" :key="blog.id"></blog-card>

            <div class="row" v-if="blogs.length === 0">
                <template>
                    <h2>Oh no, there are no blogs ...</h2>
                </template>
                <template v-if="form.filters.length">
                    <h2>Oh no, there are no blogs with that filter ...</h2>
                </template>
            </div>

            <pagination :pagination="blogPagination" commit="blogs/setAll"></pagination>
        </div>
        <div class="col-md-2">
            <div class="row">
                <div class="form-group">row panel-links`
                    <input class="form-control" placeholder="Search for a blog ..." v-model="form.search">
                </div>
            </div>
            <div class="row">
                <hr>
                <div class="col-sm-12 tags-area">
                    <template v-for="tag in tags">
                        <div class="checkbox">
                            <label class="label pull-right" :style="'background-color:'+tag.color">
                                <input type="checkbox" class="hidden" v-model="form.filters" :value="tag.id">{{ tag.name
                                }}
                            </label>
                        </div>
                    </template>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import BlogCard from './Components/BlogCard.vue'

    export default {
        components: {
            BlogCard
        },
        data() {
            return {
                form: this.createForm({
                    filters: [],
                    search: null,
                })
            }
        },
        watch: {
            'form': {
                deep: true,
                handler: function () {
                    this.getBlogs()
                }
            },
            'blogPagination': function () {
                this.scrollToTop(200);
            }
        },
        created() {
            this.$store.dispatch('tags/get')
            this.getBlogs()
        },
        methods: {
            getBlogs() {
                this.$store.dispatch('blogs/get', _.omitBy(this.form.data(), _.isEmpty))
            },
            clearFilters() {
                this.form.reset()
            }
        },
        computed: {
            tags() {
                return this.$store.state.tags.tags
            },
            blogs() {
                return this.$store.state.blogs.blogs
            },
            blogPagination() {
                return this.$store.state.blogs.pagination
            }
        }
    }
</script>