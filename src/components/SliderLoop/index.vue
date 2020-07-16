<template>
  <div class="swiper-container" ref="banner">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(banner,index) in bannerList" :key="banner.id">
        <img :src="banner.imgUrl" />
      </div>
    </div>

    <div class="swiper-pagination"></div>

    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/css/swiper.min.css'
export default {
  name: "SliderLoop",
  props:['bannerList'],
  watch:{
    bannerList:{
      handler(){
        this.$nextTick(()=>{
          new Swiper(this.$refs.banner,{
            autoplay:true,
            loop:true,
            pagination:{
              el:'.swiper-pagination'
            },
            navigation:{
              nextEl:'.swiper-button-next',
              prevEl:'.swiper-button-prev'
            }
          })
        })
      },
      immediate:true
    }
  }
};
</script>

<style lang="less" scoped>
</style>