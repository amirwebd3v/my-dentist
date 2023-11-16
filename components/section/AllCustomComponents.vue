<script setup lang="ts">

import SlideBanner from './banner/SlideBanner.vue';
import About from './features/About.vue';
import service from './features/Service.vue';
import Feature3 from './features/Feature3.vue';
import Portfolio from './gallery/Gallery.vue';
import Testimonial from './testimonial/Testimonial.vue';
import Blog from './blogs/Blog.vue';
import CallActionAsk1 from './c2a/C2a10.vue';
// import CallActionAsk1 from './c2a/C2a2.vue';
import ContactForm from './contact/Contact.vue';
import Map from "../shared/map/Map.vue";
import Gallery from "~/components/section/gallery/Gallery.vue";
import Video from "~/components/section/gallery/Video.vue";

</script>

<template>


  <!----Slide Banner----->
  <SlideBanner/>
  <!----Ask Questions ----->
  <CallActionAsk1 />
  <!----Feature 1----->
  <About id="section1"/>
  <!----Feature 2----->
  <service id="section2"/>
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
  <Gallery id="section3"/>

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
  <Testimonial id="section4"/>
  <!----Blog ----->
      <Blog id="section5"/>
  <!----Call To Action ----->
  <!--    <CallActionText/>-->

  <!----Apps ----->
  <!--    <AppsButton/>-->
  <!----Contact Text ----->
  <!--    <ContactText/>-->
  <!----Contact Form ----->
  <ContactForm id="section6"/>
  <!----Map ----->
  <Map/>


</template>