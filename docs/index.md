---
home: true
---

<script setup>
import {ref, watch, onMounted, onUnmounted} from 'vue';
import Map from './components/Map.vue';
import RMapMobile from './components/RMapMobile.vue';

const isMobile = ref(false);
const isTablet = ref(false);
const scrollPercent = ref();
const visible = ref('1');

const handleResize = () => {
  isMobile.value = window.visualViewport.width < 600;
  isTablet.value = window.visualViewport.width >= 600 && window.visualViewport.width < 960;
};

onMounted(() => {
  isMobile.value = window.visualViewport.width < 600;
  isTablet.value = window.visualViewport.width >= 600 && window.visualViewport.width < 960;

  window.addEventListener('resize', handleResize)
});
onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
});
watch(() => scrollPercent.value, (val) => {
    switch (true) {
        case val >= 0 && val < 0.05:
            visible.value = '1';
            break;
        case val > 0.2 && val < 0.3:
            visible.value = '2';
            break;
        case val > 0.4 && val < 0.5:
            visible.value = '3';
            break;
        case val > 0.6 && val < 0.7:
            visible.value = '4';
            break;
        case val > 0.8 && val < 0.9:
            visible.value = '5';
            break;
        case val === 1:
            visible.value = '6';
            break;
        default:
            visible.value = '';
    }
});
</script>

<RMapMobile v-model:scrollPercentage="scrollPercent" v-if="isMobile"></RMapMobile>
<Map v-model:scrollPercentage="scrollPercent" v-else></Map>
<div class="content">
    <div class="lead" :class="{'visible': visible==='1'}">
       Mein Name ist Rodney Dent. <br>Hast du Zeit? Dann erzähl' dir eine Geschichte, <br> wenn das Rad sich dreht...
    </div>
    <div class="lead" :class="{'visible': visible==='2'}">
       Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi.
    </div>
    <div class="lead" :class="{'visible': visible==='3'}">
       Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. 
    </div>
    <div class="lead" :class="{'visible': visible==='4'}">
       Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. 
    </div>
    <div class="lead" :class="{'visible': visible==='5'}">
       Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi.
    </div>
    <div class="lead" :class="{'visible': visible==='6'}">
       Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi.
    </div>
</div>

<style lang="scss">

</style>