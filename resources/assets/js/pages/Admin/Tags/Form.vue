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
                    <material-picker v-model="color" />
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
                }),
                color : this.getDefaultColors()
            }
        },
        created() {
            this.fetchData()
        },
        watch : {
            '$route' : 'fetchData',
            'tag' : function() {
                this.form.fill(this.tag)
                Vue.set(this, 'color', this.form.color)
            }
        } ,
        methods : {
            submit() {
                Vue.set(this.form, 'color', this.color.hex)

                if(this.tagId) {
                    return this.update()
                }
                this.create()
            },
            create() {
                this.$store.dispatch('tags/store', this.form)
            },
            update() {
                this.$store.dispatch('tags/update', _.merge(this.form, { tag : this.tagId }))
            },
            fetchData() {
                if(this.tagId) {
                    this.$store.dispatch('tags/show', this.tagId)
                }
            },
        },
        computed : {
            tag() {
                return this.$store.state.tags.tag
            },
            tagId() {
                return this.$route.params.tag
            },
            actionStatus() {
                return this.tagId ? 'Updating' : 'Creating'
            }
        }
    }
</script>