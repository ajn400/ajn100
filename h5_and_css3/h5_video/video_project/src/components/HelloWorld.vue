<template>
    <div class="hello">
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <video :src="videoUrl" controls="controls" loop="loop"></video>
                </div>
                <div class="swiper-slide">
                    <video :src="videoUrl" controls="controls" loop="loop"></video>
                </div>
                <div class="swiper-slide">
                    <video :src="videoUrl" controls="controls" loop="loop"></video>
                </div>
            </div>
            <!-- 如果需要分页器 -->
            <div class="swiper-pagination"></div>
            <!-- 如果需要导航按钮 -->
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
            <!-- 如果需要滚动条 -->
            <div class="swiper-scrollbar"></div>
        </div>
    </div>
</template>

<script>
    import Swiper from 'swiper'
    import 'swiper/swiper.min.css'

    export default {
        name: 'HelloWorld',
        data() {
            return {
                videoUrl: 'http://video.jishiyoo.com/1eedc49bba7b4eaebe000e3721149807/d5ab221b92c74af8976bd3c1473bfbe2-4518fe288016ee98c8783733da0e2da4-ld.mp4'
            }
        },
        mounted() {
            new Swiper('.swiper-container', {
                autoplay: true,
                effect: 'fade',//渐变切换
                paginationClickable: true,//分页器切换
                direction: 'vertical',
            })
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .swiper-container {
        width: 50vw;
        height: 80vh;
        background: #000;

    }


    .swiper-slide {
        color: #fff;
        height: 100% !important;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    video {
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
    }
</style>
