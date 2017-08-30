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
                if(this.timelineId && this.timeline) {
                    this.form.fill(this.timeline)
                }
            }
        } ,
        methods : {
            submit() {
                if(this.timelineId) {
                    return this.update()
                }
                this.create()
            },
            create() {
                this.$store.dispatch('timelines/store', this.form)
            },
            update() {
                this.$store.dispatch('timelines/update', _.merge(this.form, { timeline : this.timelineId }))
            },
            fetchData() {

                this.form.reset();

                if(this.timelineId) {
                    this.$store.dispatch('timelines/show', this.timelineId)
                }
            },
        },
        computed : {
            timeline() {
                return this.$store.state.timelines.timeline
            },
            timelineId() {
                return this.$route.params.timeline
            },
            actionStatus() {
                return this.timelineId ? 'Updating' : 'Creating'
            }
        }
    }
</script>