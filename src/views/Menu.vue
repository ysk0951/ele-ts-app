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
import * as kafka from 'kafka-node';
import { EventEmitter } from 'events';
EventEmitter.defaultMaxListeners = 0;
export default class Menu extends Vue {
  public data(){
        return {
            selectedMenu : "",
            randomNum : {
                random : function(n1, n2):number{ return Math.random() * (n2 -n1 +1) + n1 },
                auth : function(n):number{
                       var value = 0;
                        for(var i=0; i<n; i++){
                            value += this.random(0,9);
                        }
                        return value;
                },
            }
        }
    }
    public mounted() {
        this.init();
    }
    get randomNum() : object {
        return this.randomNum
    }
    public init():void{
        console.log("Hello Kafak");
        console.log(this.randomNum,kafka);
    }
    public makeWASIP() : string {
        return (Math.floor(Math.random() * 255) + 1)+"."+(Math.floor(Math.random() * 255))+"."+(Math.floor(Math.random() * 255))+"."+(Math.floor(Math.random() * 255));
    }
    public generateRandom(max : number ,min : number) : number{
        return Math.floor(Math.random()*(max-min+1)) + min;
    }
    public makeUUID(){
         return  'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
      }).replace(/-/g,"");
    }
    public randomArray(arr : Array<any>) : Array<any> {
        return arr[Math.floor(Math.random()*arr.length)]
    }
}

</script>
