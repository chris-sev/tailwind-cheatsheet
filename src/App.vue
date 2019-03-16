<template>
  <div>
    <Navbar @searchTyped="handleSearch" />

    <div
      class="container mx-auto p-5 h-screen flex flex-wrap"
    >
      <div class="-mx-4 w-full">
        <div
          v-for="(category, index) in filteredData ||
            tailwindData"
          :key="index"
        >
          <div class="m-4 bg-white w-full rounded shadow">
            <div class="border-b p-4">
              {{ category.name }}
            </div>
            <div class="p-4">
              <ul class="list-reset">
                <li
                  v-for="(item,
                  index) in category.classes"
                  :key="index"
                  class="flex justify-between p-2 "
                  :class="{
                    'border-b border-grey-lighter':
                      index !==
                      category.classes.length - 1
                  }"
                >
                  <div class="whitespace-no-wrap pr-3">{{ item.name }}</div>
                  <div v-html="item.property"></div>
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
      query: '',
      tailwindData: null,
      filteredData: null
    };
  },
  mounted() {
    this.fetchTailwindData();
  },
  methods: {
    fetchTailwindData() {
      fetch(
        'https://korzo.github.io/tailwindcss-docs-scraper/data.json'
      )
        .then(resp => resp.json())
        .then(data => (this.tailwindData = data));
    },
    handleSearch({ query }) {
      if (!query || query.length === 0)
        return (this.filteredData = null);

      return this.$search(query, this.tailwindData, {
        keys: ['name', 'classes.name'],
        threshold: 0.1,
      }).then(results => {
        this.filteredData = results;
      });
    }
  }
};
</script>
