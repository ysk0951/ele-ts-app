<template>
   <v-app>
    <v-content>
        <v-btn elevation="3">FileBackUP_SVN</v-btn>
        <v-btn elevation="3">KAFKA Produce</v-btn>
        <v-btn elevation="3">KAFKA Consume</v-btn>
    </v-content>
  </v-app>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
export default class Menu extends Vue {
    public data(){
        return {
            selectedMenu : undefined,

        }
    }
    public mounted() {
        console.log(this);
    }
}
</script>
