<template>
  <ion-page>
    <ion-content :fullscreen="true">
            <ion-item  class="sign-in">
                <span><i class="fa fa-user"></i></span>
               <ion-input type="text" name="email" placeholder="Enter your email"></ion-input>
          </ion-item>
          <ion-item>
                     <span><i class="fa fa-lock"></i></span>
                <ion-input type="text" name="password" placeholder="Enter your password"></ion-input>
          </ion-item>
          <ion-button>Sign In</ion-button>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonContent,
 IonInput ,
  IonPage, 
  IonItem,
  IonButton
  } from '@ionic/vue';
import { defineComponent } from 'vue';


export default defineComponent({
  name: 'SignIn',
  components: {
    IonContent,
   IonInput,
    IonPage,
     IonItem,
     IonButton
  }
});
</script>

<style scoped>
     .sign-in{
               background: #000;
     }
</style>