<template>
  <ion-page>
    <ion-content :fullscreen="true">
       
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonContent,
 IonInput ,
  IonPage, 
  IonItem, } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SignUp',
  components: {
    IonContent,

    IonPage,

  }
});
</script>

<style scoped>
</style>