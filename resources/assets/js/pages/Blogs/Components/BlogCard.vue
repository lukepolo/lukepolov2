<template>
   <div class="blog">
       <div class="row">
           <h1 class="blog-name">
               <router-link class="pull-right continue-reading" :to="{ name : 'blog', params : { blog : blog.id } }">
                   { {{ blog.name }}
               </router-link>
           </h1>
           <small>{{ parseDate(blog.created_at) }}</small>
           <div class="technologies">
               <span class="label" :style="'background-color:' + blog.tag.color" v-for="tag in blog.tags">
                    {{ tag.name }}
                </span>
           </div>
       </div>
       <div class="row">
           <a>
               <img class="img-responsive blog-image center-block" :src="blog.image">
           </a>
       </div>
       <div class="row">
           <p>
               <froalaView v-model="blog.preview_text"></froalaView>
           </p>
       </div>
       <div class="row">
           <router-link class="pull-right continue-reading" :to="{ name : 'blog', params : { blog : blog.id } }">
               Continue Reading ...
           </router-link>
       </div>
       <hr>
   </div>
</template>

<script>
    export default {
        props : [ 'blog' ]
    }
</script>