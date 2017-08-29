<template>
    <section>
        <div class="col-md-3">
            <h3>{{ actionStatus }} Timeline</h3>

            <form @submit.prevent="submit">
                <div class="form-group">
                    <label>Name</label>
                    <input class="form-control" v-model="form.name">
                </div>
                <div class="form-group">
                    <label>Start Date</label>
                    <flat-pickr v-model="form.start_date"></flat-pickr>
                </div>
                <div class="form-group">
                    <label>End Date</label>
                    <flat-pickr v-model="form.end_date"></flat-pickr>
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
                    end_date : null,
                    start_date : null,
                })
            }
        },
        created() {
            this.fetchData()
        },
        watch : {
            '$route' : 'fetchData',
            'timeline' : function() {
                this.form.fill(this.timeline)
            }
        } ,
        methods : {
            submit() {
                if(this.timeline) {
                    return this.update()
                }
                this.create()
            },
            create() {
                this.$store.dispatch('timelines/store', this.form)
            },
            update() {
                this.$store.dispatch('timelines/update', _.merge(this.form, { timeline : this.timeline.id }))
            },
            fetchData() {
                let timeline = this.$route.params.timeline

                if(timeline) {
                    this.$store.dispatch('timelines/show', timeline)
                }
            },
        },
        computed : {
            timeline() {
                return this.$store.state.timelines.timeline
            },
            actionStatus() {
                return this.timeline ? 'Updating' : 'Creating'
            }
        }
    }
</script>