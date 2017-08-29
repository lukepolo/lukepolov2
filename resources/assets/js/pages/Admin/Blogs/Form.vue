<template>
    <section>
        <div class="col-md-9">
            <h3>Preview Text</h3>
            <froala v-model="form.preview_text"></froala>

            <froala v-model="form.html"></froala>
        </div>
        <div class="col-md-3">
            <form @submit.prevent="submit()">
                <div class="form-group">
                    <label>Name</label>
                    <input type="text" class="form-control" name="url" v-model="form.name">
                </div>
                <div class="form-group">
                    <label>Draft</label>
                    <input type="checkbox" class="form-control" name="url" v-model="form.draft">
                </div>
                <div class="form-group">
                    <label>Link name</label>
                    <input type="text" class="form-control" name="link_name" v-model="form.link_name">
                </div>
                <div class="form-group">
                    <label>Blog Image</label>
                    <div class="dropzone">
                        <!--<div class="@if(!isset($blog)) hide @endif js-preview-reset btn btn-xs btn-primary">Reset</div>-->
                        <!--<h4 class="@if(isset($blog)) hide @endif  dropzone-text">Drop files here or click to upload.</h4>-->
                        <!--<input type="file" name="blog_image" id="js-image-upload" accept="image/jpeg">-->
                        <!--<img id="image-preview" class="img-responsive"/>-->
                    </div>

                </div>
                <div class="form-group">
                    <label>Tags</label>
                    <select class="form-control" multiple v-model="tags">
                        <option v-for="tag in tags" :value="tag.id">
                            {{ tag.name }}
                        </option>
                    </select>
                </div>
                <br>
                <button class="btn btn-primary">
                    <template v-if="blog">
                        Update
                    </template>
                    <template v-else>
                        Create
                    </template>
                </button>
            </form>
        </div>
    </section>
</template>

<script>
    import VueFroala from 'vue-froala-wysiwyg';

    export default {
        data() {
            return {
                form : this.createForm({
                    name : null,
                    draft : null,
                    link_name : null,
                    image : null,
                    tags : [],
                    html : null,
                    preview_text : null,
                })
            }
        },
        created() {
            this.fetchData()
        },
        watch : {
            '$route' : 'fetchData',
            'blog' : function() {
                this.form.fill(this.blog)
            }
        } ,
        methods : {
            submit() {
                if(this.blog) {
                    return this.update()
                }
                this.create()
            },
            create() {
                this.$store.dispatch('blogs/store', this.form)
            },
            update() {
                this.$store.dispatch('blogs/update', _.merge(this.form, { blog : this.blog.id }))
            },
            fetchData() {
                let blog = this.$route.params.blog
                if(blog) {
                    this.$store.dispatch('blogs/show', blog)
                }
            },
        },
        computed : {
            blog() {
                return this.$store.state.blogs.blog
            },
            tags() {
                return this.$store.state.tags.tags
            }
        }
    }
</script>