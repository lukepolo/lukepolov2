<template>
    <div>
        <div class="blog-container col-md-10">
            <div class="row" v-if="form.filters.length">
                <a class="label clear-filter" @click="clearFilters">Clear Filters</a>
            </div>

            <blog-card :blog="blog" v-for="blog in blogs" :key="blog.id"></blog-card>

            <div class="row" v-if="blogs.length === 0">
                <h2>Oh no, there are no blogs with that filter . . .</h2>
            </div>
        </div>
        <div class="col-md-2">
            <div class="row text-center">
                <select v-model="form.filters" multiple></select>
            </div>
            <div class="row">
                <hr>
                <div class="col-sm-12 tags-area">
                    <template v-for="tag in tags">
                        <input type="checkbox" :style="'background-color:'+tag.color" class="pull-right" v-model="form.filters" :value="tag.id">{{ tag.name }}
                    </template>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import BlogCard from './Components/BlogCard.vue'
    export default {
        components : {
            BlogCard
        },
        data() {
          return {
              form: this.createForm({
                  filters: []
              })
          }
        },
        watch : {
          'form.filters' : function() {
              this.getBlogs()
          }
        },
        created() {
            this.$store.dispatch('tags/get')
            this.getBlogs()
        },
        methods : {
            getBlogs() {
                this.$store.dispatch('blogs/get', this.form.filters.length ? this.form : null)
            },
            clearFilters() {
                this.form.reset()
            }
        },
        computed : {
            tags() {
                return this.$store.state.tags.tags
            },
            blogs() {
                return this.$store.state.blogs.blogs
            }
        }
    }
</script>