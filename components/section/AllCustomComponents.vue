<script setup lang="ts">
// import Feature3 from './features/Feature3.vue';
// import Portfolio from './gallery/Gallery.vue';
// import Article from '~/components/section/articles/Article.vue';
// import CallActionAsk1 from './c2a/C2a2.vue';
import SlideBanner from './banner/SlideBanner.vue';
import About from './features/About.vue';
import service from './features/Service.vue';
import Testimonial from './testimonial/Testimonial.vue';
import CallActionAsk1 from './c2a/C2a10.vue';
import Header from "~/components/section/header/Header.vue";
import ContactForm from './contact/Contact.vue';
import Map from "../shared/map/Map.vue";
import Gallery from "~/components/section/gallery/Gallery.vue";
import Video from "~/components/section/gallery/Video.vue";
import {useSettingStore} from "~/store/setting";
import {storeToRefs} from "pinia";

/********************************************************/
const headerSettings = ref()
const sliderBannerSettings = ref()
const aboutSettings = ref()
const gallerySettings = ref()
const testimonialSettings = ref()

const {getSettingsByGroup} = storeToRefs(useSettingStore())
await useSettingStore().fetch()
await getSettingsByGroup.value('general').then(res => headerSettings.value = res)
await getSettingsByGroup.value('slider-banner').then(res => sliderBannerSettings.value = res)
await getSettingsByGroup.value('about').then(res => aboutSettings.value = res)
await getSettingsByGroup.value('gallery').then(res => gallerySettings.value = res)
await getSettingsByGroup.value('testimonial').then(res => testimonialSettings.value = res)


// console.log(headerSettings.value)
</script>

<template>

  <Header  :header-settings="headerSettings"/>
  <!----Slide Banner----->
  <SlideBanner id="header" :carousel-settings="sliderBannerSettings"/>
  <!----Ask Questions ----->
  <CallActionAsk1 />
  <!----Feature 1----->
  <About id="about-us" :about-settings="aboutSettings"/>
  <!----Feature 2----->
  <service id="services"/>
  <!----Main Banner----->
  <!--      <MainBanner/>-->
  <!----Banner Text----->
  <!--    <BannerText/>-->
  <!----Work Banner----->
  <!--      <WorkBanner/>-->
  <!----Form Banner----->
  <!--    <FormBannerText/>-->
  <!----Form Email Banner----->
  <!--      <FormBannerInput/>-->
  <!----Feature Text----->
  <!--    <FeatureText/>-->
  <!----Ask Questions ----->
  <!--  <CallActionAsk2/>-->
  <!----Portfolio----->
  <Gallery id="gallery" :gallery-settings="gallerySettings"/>

  <!----Video----->
  <Video/>

  <!----Portfolio Text----->
  <!--    <PortfolioText/>-->

  <!----Price Text----->
  <!--    <PriceText/>-->
  <!----Pricing Plans----->
  <!--      <PricingPlans/>-->
  <!----Team Text----->
  <!--    <TeamText/>-->
  <!----Team----->
  <!--    <Team/>-->
  <!----Testimonials Text----->
  <!--      <TestimonialText/>-->
  <!----Testimonials Quotes----->
  <Testimonial id="testimonials" :testimonial-settings="testimonialSettings"/>
  <!----Article ----->
<!--      <Article id="section5"/>-->
  <!----Call To Action ----->
  <!--    <CallActionText/>-->

  <!----Apps ----->
  <!--    <AppsButton/>-->
  <!----Contact Text ----->
  <!--    <ContactText/>-->
  <!----Contact Form ----->
  <ContactForm id="contact-us"/>
  <!----Map ----->
  <Map/>

  <LcFooter/>


</template>