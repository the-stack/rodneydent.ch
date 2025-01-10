<template>
  <div class="tag_cloud__wrapper">
    <div :class="'tag--'+tag.frontmatter.rating" v-for="(tag, index) in tags">
      <button class="button--plain"
              :class="{'active': currentIndexOfTag === index}"
              v-html="tag.frontmatter.title" @click="handleTagClick(tag, index)">
      </button>
    </div>
  </div>
</template>
<script setup>
import {defineProps, defineEmits, ref} from "vue";

const currentIndexOfTag = ref(null)

const props = defineProps({
  tags: Array
})
const emits = defineEmits(['click'])

//if clicked on tag, emit click event and pass active class to tag
function handleTagClick(value, index) {
  emits('click', value)
  currentIndexOfTag.value = index
}
</script>
<style lang="scss">
@use "sass:meta";
@use "sass:string";
@import "@theme/colors";
@import "@theme/style";

.tag {
  &_cloud__wrapper {
    background-color: $secondaryOp80;
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    justify-content: center;
    align-content: center;
    padding: 0.5rem;
    z-index: 200;
    @media (min-width: $layout-breakpoint-desktop) {
      height: 50%;
    }
  }
}

.tag_cloud__wrapper {
  .active.button--plain {
    color: $accent;
    font-weight: bold;
  }
}

/// Passes each element of $list to a separate invocation of $mixin.
@mixin apply-to-all($mixin, $list) {
  @each $element in $list {
    @include meta.apply($mixin, $element);
  }
}

@mixin tag-class($size) {
  .tag--#{$size} {
    @if ($size == 5) {
      margin-top: 10px;
    }
    @if ($size == 6) {
      margin-top: 10px;
    }

    button {
      font-size: #{$size * 0.4}rem;
      line-height: 1rem;
      @if ($size <3){
        font-size: #{$size * 0.5}rem;
        line-height: 1.2rem;
      }
      color:$primary;
      cursor: pointer;
      @media (min-width: 450px) {
        font-size: #{$size * 0.7}rem;
        line-height: 1.2rem;
      }
    }
  }
}

$sizes: [1, 2, 3, 4, 5, 6];

@include apply-to-all(meta.get-mixin("tag-class"), $sizes);
</style>