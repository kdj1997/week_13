Vue.component('timeline-component', {
    props: ['events'],
    template: `
    <div id="timeline">
      <div v-for="event in sortedEvents" :key="event.date" class="event">
        <h3>{{ event.title }}</h3>
        <p>Date: {{ event.date }}</p>
        <p>{{ event.description }}</p>
        <span class="event-date">{{ formatDate(event.date) }}</span>
      </div>
    </div>
  `,
    methods: {
        formatDate(date) {
            const options = { year: 'numeric', month: 'long', day: 'numeric' };
            return new Date(date).toLocaleDateString('en-US', options);
        }
    },
    computed: {
        sortedEvents() {
            // Sort events by date in ascending order
            return this.events.slice().sort((a, b) => new Date(a.date) - new Date(b.date));
        }
    }
});

new Vue({
    el: '#app',
    data: {
        events: [
            { title: 'Event 1 (Default)', date: '2023-01-01', description: 'Description for Event 1' },
        ],
        newEvent: {
            title: '',
            date: '',
            description: ''
        }
    },
    methods: {
        addNewEvent() {
            if (this.newEvent.title && this.newEvent.date) {
                const newEvent = {
                    title: this.newEvent.title,
                    date: this.newEvent.date,
                    description: this.newEvent.description
                };
                this.events.push(newEvent);
                // Reset newEvent data
                this.newEvent = { title: '', date: '', description: '' };
            } else {
                alert('Please enter title and date for the new event.');
            }
        }
    }
});
