<template>
  <div ref="carousel" class="carousel__wrapper">
    <div class="btn__prev" v-if="numbersShown !== items.length">
      <button @click="handlePrev">
        <svg width="30px" class="svg__fill--red-1" viewBox="1 3 22 17">
          <g>
            <path :d="mdiChevronLeft"/>
          </g>
        </svg>
      </button>
    </div>
    <div class="carousel__window" :style="'left: -'+left+'px;'">
      <div class="carousel__items">
        <div class="item" v-for="(item, index) in items" :id="'img_'+ index" @click="openImgview(item)">
          <img :src="item" :alt="'img_'+ index" :style="'width: '+ ((carouselWidth/numbersShown)-4)+'px;'">
        </div>
      </div>
    </div>
    <div class="btn__next" v-if="numbersShown !== items.length">
      <button @click="handleNext">
        <svg width="30px" class="svg__fill--red-1" viewBox="1 3 22 17">
          <g>
            <path :d="mdiChevronRight"/>
          </g>
        </svg>
      </button>
    </div>
  </div>
  <div class="model__wrapper" v-if="showModel">
    <button class="model__close" @click="closeImgview">
      <svg width="30px" class="svg__fill--red-1" viewBox="1 3 22 17">
        <g>
          <path :d="mdiClose"/>
        </g>
      </svg>
    </button>
    <img :src="activeImg" alt="aktiviertes Bild">
  </div>
</template>
<script setup>
import {ref, defineProps, computed, onMounted, onUnmounted} from 'vue';
import {mdiChevronLeft, mdiChevronRight, mdiClose} from '@mdi/js';

const props = defineProps({
  items: Array,
  height: {
    type: String,
    default: 'auto',
  },
  objectFit: {
    type: String,
    default: 'cover',
  },
  numbersShown: {
    type: Number,
    default: 1,
  },
})
const emits = defineEmits(['update:modelVisibility']);
const carousel = ref(null);
const step = ref(0);
const left = ref(0);
const activeImg = ref(null);
const showModel = ref(false);
const modulo = computed(() => props.items.length % props.numbersShown);
const widthRemainingElements = computed(() => {
  let width = 0;
  for (let i = 0; i < props.numbersShown; i++) {
    width += document.getElementById('img_' + (props.items.length - 1 - i)).offsetWidth;
  }
  return width;
})

const carouselWidth = ref(0)
const handleResize = () => {
  carouselWidth.value = carousel.value?.offsetWidth;
};

onMounted(() => {
  carouselWidth.value = carousel.value?.offsetWidth;

  window.addEventListener('resize', handleResize)
  window.addEventListener('deviceorientation', handleResize)
});
onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
  window.removeEventListener('deviceorientation', handleResize)
});

function handleNext() {
  let active = document.getElementById('img_' + step.value);
  if (modulo.value){
    if (step.value === props.items.length - 1 - modulo.value) {
      step.value = 0;
      left.value = 0;
      return;
    }
  } else {
    if (step.value === props.items.length - props.numbersShown) {
      step.value = 0;
      left.value = 0;
      return;
    }
  }

  left.value += active.offsetWidth;
  step.value++;
}

function handlePrev() {
  let prev = document.getElementById('img_' + (step.value - 1));
  let totalLength = 0;
  for (let i = 0; i < props.items.length; i++) {
    totalLength += document.getElementById('img_' + i).offsetWidth;
  }
  if (step.value === 0) {
    if (modulo.value){
      step.value = props.items.length - 1 - modulo.value;
      left.value = totalLength - widthRemainingElements.value;
      return;
    }
    step.value = props.items.length - props.numbersShown;
    left.value = totalLength - widthRemainingElements.value;
    return;
  }
  left.value -= prev.offsetWidth;
  step.value--;
}

function openImgview(item) {
  activeImg.value = item;
  showModel.value = true;
  emits['update:modelVisibility'](true);
  document.body.style.overflow = 'hidden';
}
function closeImgview() {
  showModel.value = false;
  emits['update:modelVisibility'](false);
  document.body.style.overflow = 'auto';
}

</script>
<style scoped lang="scss">
@import "@theme/colors";

.carousel__wrapper {
  position: relative;
  width: 100%;
  height: v-bind('props.height');
  overflow: hidden;

  .btn {
    &__prev, &__next {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);

      button {
        cursor: pointer;
        background-color: rgba(255, 255, 255, 0.8);
        border-radius: 50%;
        border: none;


        svg {
          fill: $primary;
        }

        &:hover {
          svg {
            fill: $primaryOp40;
          }
        }
      }
    }

    &__prev {
      left: 0;
      z-index: 500;
    }

    &__next {
      right: 0;
    }
  }

  .carousel__window {
    height: v-bind('props.height');
    position: absolute;
    top: 0;
    overflow: hidden;
    transition: left 0.5s ease-in-out;
  }

  .carousel__items {
    height: v-bind('props.height');
    display: flex;
    flex-wrap: nowrap;
    width: auto;

    .item {
      cursor: pointer;
      display: flex;
      justify-content: center;
      flex-shrink: 0;
      flex-grow: 0;
      overflow: hidden;
      border: 3px solid $primaryOp40;
      border-right: none;
      &:last-child {
        border-right: 3px solid $primaryOp40;
      }

      img {
        height: v-bind('props.height');
        object-fit: v-bind('props.objectFit');
        object-position: center;
      }
    }
  }
}
.model{
  &__close {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 1rem;
    right: 1rem;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    background-color: rgba(255, 255, 255, 0.8);
  }
  &__wrapper {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: $third;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
    overflow: hidden;
    img {
      height: 1000px;
      aspect-ratio: 1/1;
      max-width: 90%;
      max-height: 90%;
      object-fit: contain;
    }
  }
}
</style>