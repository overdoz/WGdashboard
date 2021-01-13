<template>

  <div class="list__conainer">
    <div v-for="todo in ToDos" class="card">
      <p>{{todo.name}}</p>
    </div>
  </div>

  <input class="list__input" type="text" v-model="newItem" @keyup.enter.prevent="addItem"/>
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
      ToDos: [],
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
    Todos: db.collection("ToDos")
  }
}
</script>

<style>

p {
  margin:0.4rem;
}



.card {
  width: 90vw;
  height: 20vw;
  background-color: white;
  margin-bottom: 10px;
  display: flex;
  border-top: 2px dotted #F2BDC7;
  border-bottom: 2px dotted #F2BDC7;
}

.list__conainer {
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.list__input {
  position: fixed;
  bottom: 20px;
  width: 100vw;
  left: 0;
}

</style>
