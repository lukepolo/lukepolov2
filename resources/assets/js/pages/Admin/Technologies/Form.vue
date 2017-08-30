<template>
    <section>
        <div class="col-md-3">
            <h3>{{ actionStatus }} Technology</h3>

            <form @submit.prevent="submit">
                <div class="form-group">
                    <label>Name</label>
                    <input class="form-control" v-model="form.name">
                </div>


                <div class="form-group">
                    <label>URL</label>
                    <input class="form-control" v-model="form.url">
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
                    url : null,
                    name : null,
                    color : null,
                }),
                color: this.getDefaultColors(),
            }
        },
        created() {
            this.fetchData()
        },
        watch : {
            '$route' : 'fetchData',
            'technology' : function() {
                this.form.fill(this.technology)
                Vue.set(this, 'color', this.form.color)
            }
        } ,
        methods : {
            submit() {
                Vue.set(this.form, 'color', this.color.hex)

                if(this.technology) {
                    return this.update()
                }
                this.create()
            },
            create() {
                this.$store.dispatch('technologies/store', this.form)
            },
            update() {
                this.$store.dispatch('technologies/update', _.merge(this.form, { technology : this.technology.id }))
            },
            fetchData() {
                let technology = this.$route.params.technology

                if(technology) {
                    this.$store.dispatch('technologies/show', technology)
                }
            },
        },
        computed : {
            technology() {
                return this.$store.state.technologies.technology
            },
            actionStatus() {
                return this.technology ? 'Updating' : 'Creating'
            }
        }
    }
</script>