<template>
    <section>
        <div class="col-md-9">
            <h3>Preview Text</h3>
            <froala :config="previewConfig" v-model="form.preview_text"></froala>

            <froala :config="blogConfig" v-model="form.html"></froala>
        </div>
        <div class="col-md-3">
            <form @submit.prevent="submit()">
                <div class="form-group">
                    <label>Name</label>
                    <input class="form-control" name="url" v-model="form.name">
                </div>
                <div class="form-group">
                    <label>Draft</label>
                    <input type="checkbox" class="form-control" name="url" v-model="form.draft">
                </div>
                <div class="form-group">
                    <label>Link name</label>
                    <input class="form-control" name="link_name" v-model="form.link_name">
                </div>
                <div class="form-group">
                    <label>Blog Image</label>
                    <div class="dropzone">
                        <div class="js-preview-reset btn btn-xs btn-primary" v-if="blogImage" @click="resetblogImage">Reset</div>
                        <h4 class="dropzone-text" v-if="!blogImage">Drop files here or click to upload.</h4>
                        <input type="file" name="blog_image" @change="onFileChange">
                        <img id="image-preview" class="img-responsive" :src="blogImage"/>
                    </div>
                </div>
                <div class="form-group">
                    <label>Tags</label>
                    <select class="form-control" multiple v-model="form.tags">
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
                    tags : [],
                    html : null,
                    preview_text : null,
                    blog_image : null,
                    remove_blog_image : null,
                }),
                blogImageBase64 : null,
            }
        },
        created() {
            this.fetchData()
        },
        watch : {
            '$route' : 'fetchData',
            'blog' : function() {
                this.form.fill(this.blog)
                console.info(this.blog.tags)
                this.form.tags = _.map(this.blog.tags, 'id')
            }
        } ,
        methods : {
            submit() {

                let formData = new FormData();

                _.each(this.form, function(value, key) {
                    if(!_.isNull(value) && typeof value !== 'undefined') {
                        formData.append(key, value);
                    }
                })

                if(this.blog) {
                    return this.update(formData)
                }
                this.create(formData)
            },
            create(formData) {
                this.$store.dispatch('blogs/store', formData)
            },
            update(formData) {
                this.$store.dispatch('blogs/update', {
                    blog : this.blog.id,
                    formData : formData,
                })
            },
            fetchData() {
                this.$store.dispatch('tags/get')
                let blog = this.$route.params.blog
                if(blog) {
                    this.$store.dispatch('blogs/show', blog)
                }
            },
            resetblogImage() {
                Vue.set(this.form, 'blog_image', null)
                Vue.set(this, 'blogImageBase64', null)
                Vue.set(this.form, 'remove_blog_image', true)
            },
            onFileChange(e) {
                const files = e.target.files || e.dataTransfer.files;
                if (!files.length) {
                    return;
                }

                let file = files[0];
                let reader = new FileReader();

                reader.onload = (e) => {
                    Vue.set(this, 'blogImageBase64', e.target.result)
                }

                reader.readAsDataURL(file)

                Vue.set(this.form, 'blog_image', file)
                Vue.set(this.form, 'remove_blog_image', false)
            },
        },
        computed : {
            blog() {
                return this.$store.state.blogs.blog
            },
            tags() {
                return this.$store.state.tags.tags
            },
            blogConfig() {
                let config = _.clone(this.froalaConfig)
                config.heightMin = 400
                return config
            },
            previewConfig() {
                let config = _.clone(this.froalaConfig)
                config.heightMin = 200
                return config
            },
            blogImage() {
                if(this.blogImageBase64) {
                    return this.blogImageBase64
                }

                if(_.isString(this.form.blog_image)) {
                    return this.form.blog_image
                }

            }
        }
    }
</script>