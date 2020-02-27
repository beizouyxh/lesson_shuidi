<template>
    <header id="head_top">
        <slot></slot>
        <section class="title_head ellipsis" v-if="headTitle">
        <span class="title_text">
             {{headTitle}}
        </span>
       
        </section>
        
    </header>
</template>
<script>
export default({
    props:['headTitle']
})
</script>

<style  scoped>
#head_top{
    background-color: blue
}
    
</style>