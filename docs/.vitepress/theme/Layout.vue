<script setup>
import './style.scss'
import {useData} from 'vitepress'
import RFooter from "../../components/RFooter.vue";
import Carousel from "../../components/Carousel.vue";
import TagCloud from "../../components/TagCloud.vue";
import {ref, computed, onMounted, onUnmounted} from "vue";
import {data as Steps} from '../../cv.data.ts';

const {site, frontmatter, page} = useData()
const bookframeStyle = computed(() => (frontmatter) => {
  let style = {
    borderImageSource: `url(/borders/border_img_0${frontmatter.border}.svg)`,
    borderImageSlice: '32.1%',
    borderImageRepeat: 'round round',
  }
  if (frontmatter.border === 4) {
    style.borderImageSlice = '9%';
    style.borderImageRepeat = 'round repeat';
  }
  if (frontmatter.border === 5) {
    style.borderImageSlice = '15%';
    style.borderImageRepeat = 'round repeat';
  }
  return style
})
const isLandscape = ref(false);
const isMobile = ref(false);
const titleImg = ref(null);
const content = ref({frontmatter: {letter:'E'}, html: '<h1>rfahre mehr über Rodney Dent</h1><p>Drücke auf ein Sujets das dich interessiert!</p'});

function getBackgroundImg(img){
  return 'background-image: url("' + img +'")'
}

const handleResize = () => {
  const isMobile = ref(false);
  isLandscape.value = window.innerHeight < window.innerWidth;
};

function handleTagClick(value) {
  content.value = value;
}

onMounted(() => {
  isMobile.value = window.visualViewport.width < 600;
  isLandscape.value = window.innerHeight < window.innerWidth;
  window.addEventListener('deviceorientation', handleResize)
});
onUnmounted(() => {
  window.removeEventListener('deviceorientation', handleResize)
});

</script>
<template>
  <div v-if="frontmatter.home" class="home">
    <Content/>
    <div class="content__frame pointerevents--none">
      <div class="sign__wrapper">
        <img src="/sign.svg" alt="Unterschrift">
      </div>
    </div>
  </div>
  <div v-else-if="frontmatter.geschichten" class="books">
    <img class="map" src="/karte.webp" alt="karte">
    <div class="content__frame bg-negative">
      <Content/>
    </div>
  </div>
  <div v-else-if="frontmatter.book && frontmatter.published">
    <img class="map" src="/karte.webp" alt="karte">
    <div class="content__frame bg-negative">
      <div class="lead__wrapper">
        <div class="title__wrapper" :style="bookframeStyle(frontmatter)">
          <div>
            <h1 class="book__title" v-html="frontmatter.title"></h1>
            <h2 class="book__subtitle" v-html="frontmatter.subtitle"></h2>
          </div>
        </div>
        <div class="titleimg__wrapper" :style="getBackgroundImg(frontmatter.titleImg)" :class="{'bg-secondary':!frontmatter.titleImg}">
          <div class="titleimg_images__wrapper">
            <div class="carousel">
              <Carousel v-if="frontmatter.sketches.length && !isMobile"
                        :items="frontmatter.sketches"
                        :numbers-shown="isLandscape ? 1: 2"
                        height="100%"
                        object-fit="cover"></Carousel>
            </div>
            <div class="coverimg"
                 v-if="frontmatter.coverImg">
              <img alt="book cover" :src="frontmatter.coverImg"/>
            </div>
          </div>

        </div>

        <aside :style="bookframeStyle(frontmatter)">
          <div class="book__info">
            <ul class="book__parts">
              <li v-for="part in frontmatter.parts"><a :href="part.link">{{ part.title }}</a></li>
            </ul>
            <ul class="book__links">
              <li v-for="link in frontmatter.attachments"><a :href="link.file" target="_blank">{{ link.title }}</a></li>
              <li v-if="frontmatter.storelink"><a class="book__store" :href="frontmatter.storelink" rel="noreferrer"
                                                  target="_blank">zum Shop</a></li>
            </ul>
          </div>
        </aside>
        <div v-if="frontmatter.sketches.length && isMobile" class="carousel--mobile">
          <Carousel :items="frontmatter.sketches"
                    :numbers-shown="isLandscape ? 1: 2"
                    height="100%"
                    object-fit="cover"></Carousel>
        </div>
      </div>
      <div class="text__wrapper">
        <main class="main">
          <div class="letter accent">{{frontmatter.letter}}</div>
          <div class="text">
            <Content/>
          </div>
        </main>
        <div class="sign__wrapper">
          <img src="/sign.svg" alt="Unterschrift">
        </div>
      </div>
    </div>
  </div>
  <div v-else-if="page.isNotFound || frontmatter.book && !frontmatter.published">
    <img class="map" src="/karte.webp" alt="karte">
    <div class="content__frame bg-negative">
      <h1 class="class404"><span class="accent">404</span> <br>Dieser Pfad führt nicht nach Rom</h1>
    </div>
  </div>
  <div v-else-if="frontmatter.bio" class="author">
    <img class="map" src="/karte.webp" alt="karte">
    <div class="content__frame bg-negative">
      <div class="lead__wrapper">
        <div class="pa-2 bio">
          <div class="author__image">
            <img src="/author.png" alt="Rodney Dent">
          </div>
          <TagCloud :tags="Steps" @click="handleTagClick"></TagCloud>
        </div>
      </div>
      <div class="text__wrapper">
        <main class="main">
          <div class="letter accent">{{content.frontmatter.letter}}</div>
          <div class="text" v-html="content.html"></div>
        </main>
        <div class="sign__wrapper">
          <img src="/sign.svg" alt="Unterschrift">
        </div>
      </div>
    </div>
  </div>
  <r-footer></r-footer>
</template>
<style lang="scss">
@import "@theme/colors";
@import "@theme/style";

.content__frame {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  position: fixed;
  border: 5px solid $primaryOp40;
  top: 0;
  left: 0;
  width: calc(100% - 4rem);
  height: calc(100% - 2rem - 66px);
  margin: 2rem;
  z-index: 102;
  overflow-y: auto;
  @media (orientation: landscape) or (min-width: $layout-breakpoint-laptop) {
    flex-direction: row;
  }

  .sign__wrapper {
    width: 180px;
    padding: 1rem;
    align-self: end;
    @media (min-width: $layout-breakpoint-laptop) {
      width: 300px;
    }
    @media (orientation: landscape) or (min-width: $layout-breakpoint-laptop) {
      position: fixed;
      bottom: 4rem;
    }
    @media (min-width: $layout-breakpoint-laptop) {
      width: 350px;
      right: 4rem;
    }
  }
}

.home {
  .sign__wrapper {
    position: absolute;
    bottom: 1rem;
    right: 1rem;
  }
}
.bio {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: end;
  border: 3px solid $primary;
  background-color: $thirdOP40;
  width: 100%;
  height: 100%;
}
.author {
  &__image {
    width: 70%;
    @media screen and (min-width: $layout-breakpoint-laptop) {
      position: absolute;
      top: 0;
      left: -20px;
      width: 70%;
    }
    img {
      width: 100%;
      object-fit: cover;
    }
  }
}

.map {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100%;
  object-fit: cover;
  overflow-clip-margin: content-box;
  overflow: clip;
}

.class404 {
  font-size: 3rem;
  align-self: center;
  width: 100%;
  text-align: center;
  margin-top: 2rem;
}
</style>