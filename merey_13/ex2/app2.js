// app.js

Vue.component('accordion', {
    props: ['items'],
    data() {
        return {
            openSections: [],
        };
    },
    methods: {
        toggleSection(name) {
            if (this.openSections.includes(name)) {
                this.openSections = this.openSections.filter(section => section !== name);
            } else {
                this.openSections.push(name);
            }
        },
    },
    template: `
    <div class="accordion">
      <div v-for="item in items" :key="item.name" class="accordion-item">
        <div @click="toggleSection(item.name)" class="accordion-header">
          {{ item.title }}
          <span v-if="openSections.includes(item.name)">-</span>
          <span v-else>+</span>
        </div>
        <div v-if="openSections.includes(item.name)" class="accordion-content">
          <slot name="content" :item="item"></slot>
        </div>
      </div>
    </div>
  `,
});

new Vue({
    el: '#app',
    data: {
        accordionItems: [
            { name: 'name1', title: 'MEREY' },
            { name: 'name2', title: 'merey', expanded: true },
            // Add more accordion items as needed
        ],
    },
    template: `
    <div>
      <accordion :items="accordionItems">
        <template v-slot:content="{ item }">
          <!-- Custom content for each accordion item -->
          <p>This is the content for {{ item.title }}</p>
        </template>
      </accordion>
    </div>
  `,
});
