<script setup lang="ts">

// import Portfolio from './gallery/Gallery.vue';
// import Article from '~/components/section/articles/Article.vue';
// import CallActionAsk1 from './c2a/C2a2.vue';


import SlideBanner from './banner/SlideBanner.vue';
import About from './features/About.vue';
import Service from './features/Service.vue';
import Testimonial from './testimonial/Testimonial.vue';
import CallActionAsk1 from './c2a/C2a10.vue';
import FAQ from "~/components/section/features/Faq.vue";
import ContactForm from './contact/Contact.vue';
import Gallery from "~/components/section/gallery/Gallery.vue";
import Video from "~/components/section/gallery/Video.vue";

import type {
  AboutSettings,
  CarouselSettings,
  GallerySettings,
  TestimonialSettings,
  ContactusSettings,
  VideoSettings,
  FaqSettings,
  Services
} from "~/utils/types";








/********************************************************/
const carouselSettings =
    inject('carouselSettings') as CarouselSettings
const aboutSettings =
    inject('aboutSettings') as AboutSettings
const gallerySettings =
    inject('gallerySettings') as GallerySettings
const videoSettings =
    inject('videoSettings') as VideoSettings
const testimonialSettings =
    inject('testimonialSettings') as TestimonialSettings
const faqSettings =
    inject('faqSettings') as FaqSettings
const contactusSettings =
    inject('contactusSettings') as ContactusSettings
/*******************************************************/
const services =
    inject('services') as Map<number, Services>


</script>

<template>

  <div id="header">
    <SlideBanner :carousel-settings="carouselSettings"/>
    <CallActionAsk1 :services="services"/>
  </div>


  <div id="about-us">
    <About :about-settings="aboutSettings"/>
  </div>

  <div id="services">
    <Service :services="services"/>
  </div>

  <div id="gallery">
    <Gallery :gallery-settings="gallerySettings"/>
  </div>

  <div id="video">
    <Video :video-settings="videoSettings"/>
  </div>

  <div id="testimonials">
    <Testimonial :testimonial-settings="testimonialSettings"/>
  </div>

  <div id="faq">
    <FAQ :faq-settings="faqSettings"/>
  </div>

  <div id="contact-us">
    <ContactForm :contactus-settings="contactusSettings"/>
  </div>

</template>

