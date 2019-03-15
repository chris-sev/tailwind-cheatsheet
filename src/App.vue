<template>
  <div class="bg-teal-lightest">
    <Navbar />

    <div class="container mx-auto p-5 h-screen flex flex-wrap">
      <div class="-mx-4 w-full">
        <div
          v-for="(category, index) in tailwindStuffs"
          :key="index"
        >
          <div class="m-4 bg-white w-full rounded shadow">
            <div class="border-b p-4">{{ category.name }}</div>
            <div class="p-4">
              <ul class="list-reset">
                <li
                  v-for="(item, index) in category.classes"
                  :key="index"
                  class="flex justify-between p-2 "
                  :class="{
                    'border-b border-grey-lighter':
                      index !== category.classes.length - 1
                  }"
                >
                  <div>{{ item.name }}</div>
                  <div>{{ item.property }}</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar';

export default {
  components: { Navbar },
  data() {
    return {
      tailwindStuffs: [
        {
          name: 'Fonts',
          classes: [
            {
              name: 'text-xs',
              property: 'font-size: .75rem'
            },
            {
              name: 'text-sm',
              property: 'font-size: 1rem'
            }
          ]
        },
        { name: 'Backgrounds', classes: [] },
        { name: 'Shadows', classes: [] }
      ]
    };
  }
};
</script>

<style></style>
