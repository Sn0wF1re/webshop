<template>
  <!-- <form @submit.prevent="search"> -->
    <q-input v-model="search" @update:model-value="emitSearch" type="search" placeholder="Search">
      <template v-slot:append>
        <q-icon name="search" />
      </template>
    </q-input>  
  <!-- </form> -->
</template>

<script setup>
import { ref } from 'vue';
const emit = defineEmits(['emitSearch']);
const search = ref('');

const emitSearch = () => {
  emit('emitSearch', search.value);
};

</script>