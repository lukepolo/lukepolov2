<template>
    <section>
        <div class="col-md-9">
            <froala v-model="form.html"></froala>
        </div>
        <div class="col-md-3">
            <div class="form-group">
                <label>Name</label>
                <input type="text" class="form-control" name="url" v-model="form.name">
            </div>
            <div class="form-group">
                <label>URL</label>
                <input type="text" class="form-control" name="url" v-model="form.url">
            </div>
            <div class="form-group">
                <label>Project Image</label>
                <div class="dropzone">
                    <!--<div class="@if(!isset($project)) hide @endif js-preview-reset btn btn-xs btn-primary">Reset</div>-->
                    <!--<h4 class="@if(isset($project)) hide @endif  dropzone-text">Drop files here or click to upload.</h4>-->
                    <!--<input type="file" name="project_image" id="js-image-upload" accept="image/jpeg">-->
                    <!--<img id="image-preview" class="img-responsive"/>-->
                </div>

            </div>
            <div class="form-group">
                <label>Start Date</label>
                <input type="date" class="form-control">
            </div>
            <div class="form-group">
                <label>End Date</label>
                <input type="date" class="form-control">
            </div>
            <div class="form-group">
                <label>Timeline</label>
                <select class="form-control">

                </select>
            </div>
            <div class="form-group">
                <label>Technologies</label>
                <select class="form-control" multiple>

                </select>
            </div>
            <br>
            <button class="btn btn-primary">Create</button>
        </div>
    </section>
</template>

<script>
    import VueFroala from 'vue-froala-wysiwyg';

    export default {
        data() {
            return {
                form : {
                    url : null,
                    name : null,
                    html : null,
                }
            }
        }
    }
</script>