<template>
  <svg class="map" :style="{top:svgTop}" viewBox="0 0 1136 5040" xmlns="http://www.w3.org/2000/svg"
       xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve">
    <use id="Hintergrund" xlink:href="#_Image2" x="0" y="0" width="1136px" height="5040px"/>
    <g transform="matrix(0.666667,0,0,0.666667,0,0)">
        <path class="map-route" ref="routemap2" :style="{strokeDasharray: dashArray, strokeDashoffset: dashOffset}"
              d="M273.194,49.705C273.194,49.705 289.792,108.029 360.432,99.924C431.073,91.82 385.951,131.151 404.381,132.324C422.811,133.497 454.295,144.028 436.412,177.053C418.529,210.078 420.452,241.055 465.082,248.14C509.712,255.224 472.432,285.759 474.976,293.292C477.52,300.825 462.05,350.963 507.316,360.029C552.582,369.094 477.628,404.013 539.892,407.17C602.155,410.327 618.721,488.953 629.399,477.688C640.077,466.424 683.973,511.274 660.318,551.828C636.662,592.381 657.883,586.105 663.535,624.689C669.187,663.272 689.39,644.083 646.553,667.922C603.716,691.762 597.291,705.76 580.034,736.83C562.778,767.901 528.263,769.568 553.316,816.478C578.37,863.389 573.511,868.716 558.613,892.338C543.715,915.96 545.462,937.038 603.692,924.576C661.922,912.115 660.534,921.849 680.415,956.874C700.297,991.899 727.028,982.746 766.4,982.746C805.771,982.746 833.872,1022.12 828.366,1048.89C822.86,1075.65 839.042,1154.02 785.509,1175.49C731.976,1196.96 687.23,1177.57 665.404,1206.17C643.579,1234.77 520.94,1204.91 656.045,1266.74C656.045,1266.74 733.783,1309.38 762.549,1361.73C762.549,1361.73 816.788,1378.12 806.194,1431.13C806.194,1431.13 999.515,1425.38 1002.66,1510.9C1005.81,1596.42 1010.47,1662.95 1043.47,1697.84C1076.46,1732.73 1060.4,1912.48 1045.81,2001.14C1031.21,2089.8 968.863,2101.76 1002.77,2143.41C1002.77,2143.41 917.351,2198.07 826.239,2183.39C826.239,2183.39 737.544,2153.52 750.307,2212.14C750.307,2212.14 742.136,2272.54 718.702,2271.65C695.269,2270.76 691.862,2348.91 617.859,2350.81C543.856,2352.71 524.901,2367.25 533.355,2388.69C533.355,2388.69 484.557,2377.39 474.187,2419.66C474.187,2419.66 465.58,2449.13 429.61,2449.13C393.641,2449.13 529.457,2510.95 529.09,2528.96C529.09,2528.96 597.141,2522.69 640.968,2506.86L738.809,2518.1C738.809,2518.1 821.016,2499.55 891.513,2506.39C962.01,2513.22 1093.34,2535.77 1110.7,2522.46C1110.7,2522.46 1123.43,2466.25 1146.11,2517.93C1146.11,2517.93 1161.24,2559.23 1182.08,2594.4C1182.08,2594.4 1201.02,2665.17 1245.93,2632.5C1245.93,2632.5 1288.72,2617.39 1288.72,2652.93C1288.72,2652.93 1305.4,2722.77 1337.77,2722.12C1370.14,2721.47 1413.82,2711.03 1449.85,2742.91C1449.85,2742.91 1588.44,2823.93 1602.47,2809.21C1602.47,2809.21 1473.35,2920.3 1376.88,2885.6C1280.41,2850.9 1266.74,2826.33 1222.12,2862.25C1222.12,2862.25 1160.64,2937.53 1134.69,2868.87C1108.74,2800.2 1077.53,2762.5 1059.1,2733.85C1040.66,2705.19 1008.83,2671.88 942.451,2674.57C876.069,2677.26 847.795,2678.57 786.709,2727.63C725.624,2776.68 666.226,2866.2 611.958,2866.2C557.689,2866.2 533.798,2853.65 539.131,2911.1C544.465,2968.55 584.07,3037.33 504.766,3057.32C504.766,3057.32 413.65,3096.84 393.816,3169.92C373.982,3242.99 393.72,3221.14 322.327,3245.26C250.934,3269.38 276.956,3267.24 297.044,3310.34C297.044,3310.34 282.834,3373.51 244.983,3378.94C207.132,3384.38 223.381,3432.08 226.069,3458.86C228.758,3485.63 200.852,3516.5 228.758,3531.88C256.664,3547.27 302.781,3561.05 352.815,3567.17C402.85,3573.3 450.504,3584.33 467.663,3617.53C484.822,3650.73 511.748,3713.4 575.857,3713.4C639.965,3713.4 690.928,3732.6 705.941,3760.61C720.954,3788.62 721.839,3812.74 659.231,3803.43C659.231,3803.43 585.174,3790.09 572.377,3821.82C559.579,3853.55 531.938,3894.86 532.788,3894.86C533.637,3894.86 589.51,3900.97 638.631,3902.97C687.752,3904.98 692.193,3931.86 706.323,3957.06C720.452,3982.26 686.906,4023.66 683.269,4028.91C679.633,4034.17 633.032,4022.72 651.144,4070.94C669.256,4119.16 764.986,4260.35 812.816,4254.54C860.647,4248.74 879.149,4230.62 898.112,4272.07C917.076,4313.51 909.232,4357.72 973.171,4356.77C1037.11,4355.82 1103.14,4315.93 1147.5,4353.97C1147.5,4353.97 1240.24,4348.23 1290.45,4370.69C1340.66,4393.15 1416.28,4452.88 1492.22,4416.46C1568.16,4380.05 1556.05,4447.04 1556.91,4447.89C1557.77,4448.74 1620.61,4504.54 1572.15,4536.09C1523.7,4567.65 1443.24,4677.78 1443.24,4677.78L886.92,5839.68L866.424,5878.72L800.875,5860.3C800.875,5860.3 744.565,5813.06 710.852,5837.69C677.139,5862.33 681.629,5861.73 619.989,5835.49C558.349,5809.24 577.44,5797.64 510.267,5814.61C443.094,5831.58 395.776,5817.81 361.351,5818.75C326.925,5819.69 291.819,5822.66 291.819,5822.66C291.819,5822.66 237.107,6233.56 391.086,6313C545.066,6392.44 991.586,6734.7 1009.85,6768.39C1028.12,6802.07 1000.74,6813.03 1058.86,6875.43C1116.97,6937.82 1256.28,6987.27 1257.19,6986.42"/>
    </g>
    <a v-for="book of booksCoordinated" :href="book.url">
    <g class="cursor--pointer" v-show="scrollPercentage >=book.percentage"
       :transform="'matrix(0.4,0,0,0.4,'+ book.x+','+book.y+')'">
        <use :xlink:href="'#_flag'+book.frontmatter.id" x="0" y="0" width="443px" height="376px"/>
    </g>
    </a>
    <defs>
        <image id="_Image2" width="1136px" height="5040px" href="/karte_mobile.webp"/>
      <image v-for="book of booksCoordinated" :id="'_flag'+book.frontmatter.id" width="443px" height="376px"
             :href="book.frontmatter.flagImg" v-show="book.frontmatter.published"/>
    </defs>
</svg>
</template>
<script setup>
import {computed, defineEmits, defineProps, onMounted, onUnmounted, ref} from "vue";
import {data as books} from '../book.data.ts';

const props = defineProps({
  scrollPercentage: Number
})
const emits = defineEmits(['update:scrollPercentage'])

const dashArray = ref()
const dashOffset = ref()
const scrollPercentage = computed({
  get: () => props.scrollPercentage,
  set: (value) => emits('update:scrollPercentage', value)
})
const svgTop = ref(0)
const routemap2 = ref()
const randomCoordinates = ref([])

onMounted(() => {
  setDashArray();
  window.addEventListener('scroll', handleScroll);
  let filteredArray = [...coordinateArray]
  for (let i = 0; i < books.length; i++) {
    const randomIndex = Math.floor(Math.random() * filteredArray.length);
    randomCoordinates.value.push(filteredArray[randomIndex]);
    filteredArray.splice(randomIndex, 1);
  }
  // sort the randomCoordinates by percentage
  randomCoordinates.value.sort((a, b) => a.percentage - b.percentage);
})
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
})

const coordinateArray = [
  {id: 1, x: 305.658, y: 510.655, percentage: 0.013},
  {id: 2, x: 552.663, y: 1239.82, percentage: 0.086},
  {id: 3, x: 895.559, y: 1768.2, percentage: 0.215},
  {id: 4, x: 208.038, y: 2316.94, percentage: 0.387},
  {id: 5, x: 857.977, y: 2825.51, percentage: 0.556},
  {id: 6, x: 479.26, y: 3703.36, percentage: 0.7},
  {id: 7, x: 667.014, y: 4551.34, percentage: 0.82},
]

// map the books to the randomCoordinates
const booksCoordinated = computed(() => {
  if (!randomCoordinates.value.length) return [];
  return books.map((book, index) => {
    return {
      ...book,
      x: randomCoordinates.value[index].x,
      y: randomCoordinates.value[index].y,
      percentage: randomCoordinates.value[index].percentage
    }
  })
})

function setDashArray() {
  dashArray.value = routemap2.value.getTotalLength();
  dashOffset.value = routemap2.value.getTotalLength();
}

function handleScroll(e) {
  scrollPercentage.value = (document.documentElement.scrollTop + document.body.scrollTop) /
      (document.documentElement.scrollHeight - document.documentElement.clientHeight);
  dashOffset.value = dashArray.value - (dashArray.value * scrollPercentage.value);
}
</script>
<style lang="scss">

.map {
  position: absolute;
  width: 100%;
  margin-bottom: -80px;

  &-route {
    fill: none;
    stroke: rgba(108, 87, 27, 0.55);
    stroke-width: 18px;
  }
}
</style>
