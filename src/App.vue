<template>

  <div v-for="todo in todos" class="card">
    <p>{{todo}}</p>
  </div>
  <input type="text" v-model="newItem" @keyup.enter.prevent="addItem"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import { db } from "./firebase/db";

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data() {
    return {
      todos: ["Putzen", "joggen", "Baden"],
      newItem: ""
    }
  },
  methods: {
    deleteToDo(id) {
      db.collection("ToDos")
          .doc(id)
          .delete();
    },
    async addItem() {
      if (this.newItem) {
        await db.collection("ToDos").add({ name: this.newItem });
        this.newItem = "";
      }
    }
  },
  firestore: {
    ToDos: db.collection("ToDos")
  }
}
</script>

<style>



.card {
  width: 400px;
  height: 100px;
  background-color: white;
}

</style>
