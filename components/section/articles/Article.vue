<script setup lang="ts">
import {ref} from "vue";



// const activeSlide = ref(<any>null); // Initialize the active slide index
const page = 1;
import Swiper from 'swiper/bundle'
import 'swiper/swiper-bundle.css'

const swiper = ref<any>()

onMounted(() => {
  swiper.value = new Swiper('.article-slider', {
    spaceBetween: 30,
    effect: 'fade',
    loop: true,
    mousewheel: {
      invert: false,
    },
    pagination: {
      el: '.article-slider__pagination',
      clickable: true,
    }
  })
})



</script>


<template>
  <div class="bg-extra-light">
    <div class="article-component mini-spacer bottom-mini-spacer">
      <v-container>
        <!-- -----------------------------------------------
            Start Article Text
        ----------------------------------------------- -->
        <v-row justify="center" class="mb-10">
          <v-col cols="12" sm="10" md="9" lg="7">
            <div class="text-center">
              <h2 class="section-title font-weight-medium">مقالات</h2>
              <p class="text-black">
                در این قسمت انواع مقالات، توصیه ها، آموزش ها و نکات لازم جهت مراقبت از دهان و دندان و حتی درمان و
                پیشگیری از برخی بیماری ها مربوط به آن ها توسط دکتر دندان پزشکیان قرار داده شده است.
              </p>
            </div>
          </v-col>
        </v-row>

        <!-- -----------------------------------------------
            End Article Text
        ----------------------------------------------- -->
        <!-- -----------------------------------------------
            Start Article
        ----------------------------------------------- -->
<!--                <section>-->
<!--                  <div class="container">-->
<!--                    <div class="carousel">-->
<!--                      &lt;!&ndash; Render input radio buttons and slides dynamically &ndash;&gt;-->
<!--                      <input-->
<!--                          type="radio"-->
<!--                          v-for="(slide, index) in Article"-->
<!--                          :key="slide.id"-->
<!--                          :name="'slides'"-->
<!--                          :id="'slide-' + (index + 1)"-->
<!--                          :checked="index === activeSlide"-->
<!--                          @change="activeSlide = index"-->
<!--                      />-->
<!--                      <ul class="carousel__slides">-->
<!--                        <li class="carousel__slide" v-for="(slide, index) in Article" :key="slide.id">-->
<!--                          <figure>-->
<!--                            <div>-->
<!--                              &lt;!&ndash; Use slide.img from Article data &ndash;&gt;-->
<!--                              <img :src="slide.img" alt="" />-->
<!--                            </div>-->
<!--                            <figcaption>-->
<!--                              {{ slide.desc }}-->
<!--                              <span class="credit">{{ 'Photo: ' + slide.month + ' ' + slide.year }}</span>-->
<!--                            </figcaption>-->
<!--                          </figure>-->
<!--                        </li>-->
<!--                      </ul>-->
<!--                      <v-sheet class="carousel__thumbnails"  >-->
<!--                        <v-slide-group v-model="activeSlide" class="pa-4" center-active show-arrows>-->
<!--                          <v-slide-group-item v-for="(slide, index) in Article" :key="slide.id">-->
<!--                            <v-card-->
<!--                                :color="index === activeSlide ? 'primary' : 'grey lighten-1'"-->
<!--                                class="ma-4"-->
<!--                                height="150"-->
<!--                                width="150"-->
<!--                                @click="activeSlide = index"-->
<!--                            >-->
<!--                              <img :src="slide.img" alt="" />-->
<!--                              <div class="d-flex fill-height align-center justify-center">-->
<!--                                <v-scale-transition>-->
<!--                                  <v-icon-->
<!--                                      v-if="index === activeSlide"-->
<!--                                      color="white"-->
<!--                                      size="48"-->
<!--                                      icon="mdi mdi-close-circle-outline"-->
<!--                                  ></v-icon>-->
<!--                                </v-scale-transition>-->
<!--                              </div>-->
<!--                            </v-card>-->
<!--                          </v-slide-group-item>-->
<!--                        </v-slide-group>-->
<!--                      </v-sheet>-->
<!--                    </div>-->
<!--                  </div>-->
<!--                </section>-->
                <div class="article-slider">
                  <div class="article-slider__wrp swiper-wrapper">
                    <div v-for="article in Articles" :key="article.id" class="article-slider__item swiper-slide">
                      <div class="article-slider__img">
                        <img :src="article.img" alt="">
                      </div>
                      <div class="article-slider__content">



                        <span class="article-slider__code">{{ article.year }} {{ article.month }}</span>
                        <div class="article-slider__title">{{ article.title }}</div>
                        <div class="article-slider__text">{{ article.desc }}</div>
                        <v-btn size="large" color="primary" rounded="xl">ادامه خواندن</v-btn>
                      </div>

                    </div>
                  </div>
<!--                  <div class="article-slider__pagination"></div>-->
                  <div class="article-slider__pagination">
                    <v-pagination
                        v-model="page"
                        :length="3"
                        rounded="circle"
                    ></v-pagination>
                  </div>

                </div>
        <!-- -----------------------------------------------
            End Article
        ----------------------------------------------- -->
      </v-container>
    </div>
  </div>
</template>

<!--<style lang="scss" scoped>-->


<!--@mixin aspect-ratio($width, $height) {-->
<!--  position: relative;-->

<!--  &:before {-->
<!--    display: block;-->
<!--    content: "";-->
<!--    width: 100%;-->
<!--    padding-top: ($height / $width) * 100%;-->
<!--  }-->

<!--  > img {-->
<!--    position: absolute;-->
<!--    top: 0;-->
<!--    right: 0;-->
<!--    right: 0;-->
<!--    bottom: 0;-->
<!--    width: 100%;-->
<!--    height: 100%;-->
<!--    border-radius: 10px;-->
<!--  }-->
<!--}-->

<!--// Styling-->

<!--section {-->
<!--  //background: #F4F4F4;-->
<!--  padding: 50px 0;-->
<!--}-->

<!--.container {-->
<!--  max-width: 1044px;-->
<!--  margin: 0 auto;-->
<!--  padding: 0 20px;-->
<!--}-->

<!--.carousel {-->
<!--  display: block;-->
<!--  text-align: right;-->
<!--  position: relative;-->
<!--  margin-bottom: 22px;-->

<!--  > input {-->
<!--    clip: rect(1px, 1px, 1px, 1px);-->
<!--    clip-path: inset(50%);-->
<!--    height: 1px;-->
<!--    width: 1px;-->
<!--    margin: -1px;-->
<!--    overflow: hidden;-->
<!--    padding: 0;-->
<!--    position: absolute;-->

<!--    &:nth-of-type(6):checked ~ .carousel__slides .carousel__slide:first-of-type { margin-right: -500%; }-->
<!--    &:nth-of-type(5):checked ~ .carousel__slides .carousel__slide:first-of-type { margin-right: -400%; }-->
<!--    &:nth-of-type(4):checked ~ .carousel__slides .carousel__slide:first-of-type { margin-right: -300%; }-->
<!--    &:nth-of-type(3):checked ~ .carousel__slides .carousel__slide:first-of-type { margin-right: -200%; }-->
<!--    &:nth-of-type(2):checked ~ .carousel__slides .carousel__slide:first-of-type { margin-right: -100%; }-->
<!--    &:nth-of-type(1):checked ~ .carousel__slides .carousel__slide:first-of-type { margin-right: 0%; }-->

<!--    &:nth-of-type(1):checked ~ .carousel__thumbnails li:nth-of-type(1) { box-shadow: 0px 0px 0px 5px rgb(3, 25, 44); }-->
<!--    &:nth-of-type(2):checked ~ .carousel__thumbnails li:nth-of-type(2) { box-shadow: 0px 0px 0px 5px rgb(3, 25, 44); }-->
<!--    &:nth-of-type(3):checked ~ .carousel__thumbnails li:nth-of-type(3) { box-shadow: 0px 0px 0px 5px rgb(3, 25, 44); }-->
<!--    &:nth-of-type(4):checked ~ .carousel__thumbnails li:nth-of-type(4) { box-shadow: 0px 0px 0px 5px rgb(3, 25, 44); }-->
<!--    &:nth-of-type(5):checked ~ .carousel__thumbnails li:nth-of-type(5) { box-shadow: 0px 0px 0px 5px rgb(3, 25, 44); }-->
<!--    &:nth-of-type(6):checked ~ .carousel__thumbnails li:nth-of-type(6) { box-shadow: 0px 0px 0px 5px rgb(3, 25, 44); }-->
<!--  }-->
<!--}-->

<!--.carousel__slides {-->
<!--  position: relative;-->
<!--  z-index: 1;-->
<!--  padding: 0;-->
<!--  margin: 0;-->
<!--  overflow: hidden;-->
<!--  white-space: nowrap;-->
<!--  box-sizing: border-box;-->
<!--  display: flex;-->
<!--}-->

<!--.carousel__slide {-->
<!--  position: relative;-->
<!--  display: block;-->
<!--  flex: 1 0 100%;-->
<!--  width: 100%;-->
<!--  height: 100%;-->
<!--  overflow: hidden;-->
<!--  transition: all 300ms ease-out;-->
<!--  vertical-align: top;-->
<!--  box-sizing: border-box;-->
<!--  white-space: normal;-->

<!--  figure {-->
<!--    display: flex;-->
<!--    margin: 0;-->
<!--  }-->

<!--  div {-->
<!--    @include aspect-ratio(3, 2);-->
<!--    width: 100%;-->
<!--  }-->

<!--  img {-->
<!--    display: block;-->
<!--    flex: 1 1 auto;-->
<!--    object-fit: cover;-->
<!--  }-->

<!--  figcaption {-->
<!--    align-self: flex-start;-->
<!--    padding: 20px 20px 0 20px;-->
<!--    flex: 0 0 auto;-->
<!--    width: 25%;-->
<!--    min-width: 150px;-->
<!--  }-->

<!--  .credit {-->
<!--    margin-top: 1rem;-->
<!--    color: rgba(0, 0, 0, 0.5);-->
<!--    display: block;-->
<!--  }-->

<!--  &.scrollable {-->
<!--    overflow-y: scroll;-->
<!--  }-->
<!--}-->

<!--.carousel__thumbnails {-->
<!--  list-style: none;-->
<!--  padding: 0;-->
<!--  margin: 0;-->
<!--  display: flex;-->

<!--  margin: 0 -10px;-->

<!--  .carousel__slides + & {-->
<!--    margin-top: 20px;-->
<!--  }-->

<!--  li {-->
<!--    flex: 1 1 auto;-->
<!--    max-width: calc((100% / 6) - 20px);-->
<!--    margin: 0 10px;-->
<!--    transition: all 300ms ease-in-out;-->
<!--  }-->

<!--  label {-->
<!--    display: block;-->
<!--    @include aspect-ratio(1,1);-->


<!--    &:hover,-->
<!--    &:focus {-->
<!--      cursor: pointer;-->

<!--      img {-->
<!--        box-shadow: 0px 0px 0px 1px rgb(3, 25, 44);-->
<!--        transition: all 300ms ease-in-out;-->
<!--      }-->
<!--    }-->
<!--  }-->

<!--  img {-->
<!--    display: block;-->
<!--    width: 100%;-->
<!--    height: 100%;-->
<!--    object-fit: cover;-->
<!--  }-->
<!--}-->
<!--</style>-->
<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Fira+Sans:400,500,600,700,800');

.article-slider {
  width: 95%;
  position: relative;
  max-width: 800px;
  margin: auto;
  background: #fff;
  box-shadow: 0px 14px 80px rgba(34, 35, 58, 0.2);
  padding: 25px;
  border-radius: 25px;
  height: 400px;
  transition: all .3s;
  direction: rtl;


  @media screen and (max-width: 992px) {
    max-width: 680px;
    height: 400px;
  }

  @media screen and (max-width: 768px) {
    min-height: 500px;
    height: auto;
    margin: 180px auto;
  }


  @media screen and (max-height: 500px) and (min-width: 992px) {
    height: 350px;
  }

  &__item {
    display: flex;
    align-items: center;

    @media screen and (max-width: 768px) {
      flex-direction: column;
    }

    &.swiper-slide-active {
      .article-slider__img {
        img {
          opacity: 1;
          transition-delay: .3s;
        }
      }

      .article-slider__content {
        > * {

          opacity: 1;
          transform: none;

          @for $i from 0 to 15 {
            &:nth-child(#{$i + 1}) {
              transition-delay: $i * 0.1 + 0.3s;
            }
          }

        }
      }
    }

  }

  &__img {
     //width: 40%;
    width: 200px;
    flex-shrink: 0;
    height: 300px;
    background-image: linear-gradient(147deg, #eeeeee 0%, #c4c8ce 74%);
    box-shadow: 4px 13px 30px 1px rgb(180, 182, 183);
    border-radius: 20px;
    transform: translateX(80px);

    overflow: hidden;

    &:after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      //background-image: linear-gradient(60deg, rgb(56, 81, 106) 0%, #FE8A391C 74%);
      border-radius: 20px;
      opacity: 0.8;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
      opacity: 0;
      border-radius: 20px;
      transition: all .3s;
    }


    @media screen and (max-width: 992px) {
      // width: 45%;
    }
    @media screen and (max-width: 768px) {
      transform: translateY(-50%);
      width: 90%;
    }
    @media screen and (max-width: 576px) {
      width: 95%;
    }
    @media screen and (max-height: 500px) and (min-width: 992px) {
      height: 270px;
    }
  }

  &__content {
    // width: 60%;
    padding-right: 0;
    padding-left: 25px;
    @media screen and (max-width: 992px) {
      // width: 55%;
    }
    @media screen and (max-width: 768px) {
      margin-top: -80px;
      text-align: center;
      padding: 0 30px;
    }

    @media screen and (max-width: 576px) {
      padding: 0
    }

    > * {
      opacity: 0;
      transform: translateY(25px);
      transition: all .4s;


    }

  }

  &__code {
    color: #7b7992;
    margin-bottom: 15px;
    display: block;
    font-weight: 500;
  }

  &__title {
    font-size: 24px;
    font-weight: 700;
    color: #0d0925;
    margin-bottom: 20px;
  }

  &__text {
    color: #4e4a67;
    margin-bottom: 30px;
    line-height: 1.5em;
  }

  &__button {
    display: inline-flex;
    background-image: linear-gradient(147deg, #fe8a39 0%, #fd3838 74%);
    padding: 15px 35px;
    border-radius: 50px;
    color: #fff;
    box-shadow: 0px 14px 80px rgba(252, 56, 56, 0.4);
    text-decoration: none;
    font-weight: 500;
    justify-content: center;
    text-align: center;
    letter-spacing: 1px;
  }

  .swiper-container-horizontal > .swiper-pagination-bullets, .swiper-pagination-custom, .swiper-pagination-fraction {
    bottom: 10px;
    left: 0;
    width: 100%;

  }

  &__pagination {
    position: absolute;
    z-index: 21;
    left: 20px;
    width: 11px !important;
    text-align: center;
    right: auto !important;
    top: 50%;
    bottom: auto !important;
    transform: translateY(-50%);
    @media screen and (max-width: 768px) {
      transform: translateX(-50%);
      left: 50% !important;
      top: 205px;
      width: 100% !important;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    &.swiper-pagination-bullets .swiper-pagination-bullet {
      margin: 8px 0;
      @media screen and (max-width: 768px) {
        margin: 0 5px;
      }
    }

    .swiper-pagination-bullet {
      width: 11px;
      height: 11px;
      display: block;
      border-radius: 10px;
      //background: #062744;
      opacity: 0.2;
      transition: all .3s;

      &-active {
        opacity: 1;
        background: #fd3838 !important;
        height: 30px;
        box-shadow: 0 0 20px rgba(252, 56, 56, 0.3) !important;

        @media screen and (max-width: 768px) {
          height: 11px;
          width: 30px;
        }
      }
    }

  }

}

</style>
