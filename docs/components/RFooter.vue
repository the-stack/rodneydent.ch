<template>
  <footer class="footer__wrapper">
    <div class="footer__nav">
    <a class="button" href="/" :class="{'active': page.frontmatter.home }">Home</a>
    <a class="button" href="/geschichten" :class="{'active': page.frontmatter.stories }">die Geschichten</a>
    <a class="button" href="/cv" :class="{'active': page.frontmatter.bio }">der Autor</a>
    <div class="spacer"></div>
    <button v-show="!frontmatter.home" class="button" @click="goBack">zurück</button>
      <p class="madeBy" v-show="frontmatter.home">coded by <a href="https://www.the-stack.dev/" target="_blank">theStack</a></p>
    </div>

    <div class="footer__nav--mobile">
      <a class="button--outlined" href="/" :class="{'active': page.frontmatter.home }">
        <svg width="30px" viewBox="1 3 22 17">
          <g>
            <path :d="mdiHome"/>
          </g>
        </svg>
      </a>
      <a class="button--outlined ml-1" href="/geschichten" :class="{'active': page.frontmatter.stories }">
        <svg width="30px" viewBox="1 3 22 17">
          <g>
            <path :d="mdiDelta"/>
          </g>
        </svg>
      </a>
      <a class="button--outlined ml-1" href="/cv" :class="{'active': page.frontmatter.bio }">
        <svg width="30px" viewBox="1 3 22 17">
          <g>
            <path :d="mdiAccount"/>
          </g>
        </svg>
      </a>
      <div class="spacer"></div>
      <button class="button--outlined" @click="goBack" v-show="!frontmatter.home">
        <svg width="30px" viewBox="1 3 22 17">
          <g>
            <path :d="mdiArrowLeft"/>
          </g>
        </svg>
      </button>
      <p class="madeBy" v-show="frontmatter.home">coded by <a href="https://www.the-stack.dev/" target="_blank">theStack</a></p>
    </div>
  </footer>
</template>
<script setup>
import {useData} from 'vitepress'
import {mdiHome, mdiDelta, mdiAccount, mdiArrowLeft} from '@mdi/js';
const {site, frontmatter, page} = useData()

function goBack() {
  history.back();
}

</script>
<style scoped lang="scss">
@import "@theme/colors";
@import "@theme/style";
.madeBy{
  display: none;
  position: relative;
  min-width: 200px;
  text-align: right;
  a {
    text-decoration: none;
    color: $third;
  }
  @media (min-width: 450px) {
    display: block;
  }
}
.footer {
  &__wrapper{
    position: fixed;
    bottom: 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    background-color: transparent;
    padding: 1rem 2rem;
    z-index: 100;
  }
  &__nav {
    width: 100%;
    display: none;
    @media (min-width: $layout-breakpoint-laptop) {
      display: flex;
      flex-wrap: nowrap;
    }
    &--mobile {
      width: 100%;
      display: flex;
      @media (min-width: $layout-breakpoint-laptop) {
        display: none;
        flex-wrap: nowrap;
      }
    }
  }
}
</style>