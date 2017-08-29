<template>
    <section>
        <div class="col-md-3">
            <h3>{{ actionStatus }} Tag</h3>

            <form @submit.prevent="submit">
                <div class="form-group">
                    <label>Name</label>
                    <input class="form-control" v-model="form.name">
                </div>
                <div class="form-group">
                    <label>Color</label>
                    <input type="text" class="form-control" v-model="form.color">
                </div>

                <button class="btn btn-primary">
                    {{ actionStatus }}
                </button>
            </form>

        </div>
    </section>
</template>

<script>
    export default {
        data() {
            return {
                form : this.createForm({
                    name : null,
                    color : null,
                })
            }
        },
        created() {
            this.fetchData()
        },
        watch : {
            '$route' : 'fetchData',
            'tag' : function() {
                this.form.fill(this.tag)
            }
        } ,
        methods : {
            submit() {
                if(this.tag) {
                    return this.update()
                }
                this.create()
            },
            create() {
                this.$store.dispatch('tags/store', this.form)
            },
            update() {
                this.$store.dispatch('tags/update', _.merge(this.form, { tag : this.tag.id }))
            },
            fetchData() {
                let tag = this.$route.params.tag

                if(tag) {
                    this.$store.dispatch('tags/show', tag)
                }
            },
        },
        computed : {
            tag() {
                return this.$store.state.tags.tag
            },
            actionStatus() {
                return this.tag ? 'Updating' : 'Creating'
            }
        }
    }
</script>