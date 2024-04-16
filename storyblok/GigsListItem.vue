<template>
  <div class="gig">
    <div class="text-container">
      <div class="date">
        <p>{{ date }}</p>
        <span v-if="doorTime">|</span>
        <p>{{ doorTime }}</p>
      </div>
      <p class="location">{{ location }}</p>
      <p class="venue">{{ venue }}</p>
    </div>
    <button class="ticket_cta">
      <a :href="ticketLink.url">{{ ticketLinkText }}</a>
    </button>
  </div>
</template>
<script setup>
const props = defineProps({ blok: Object });
const { date, venue, location, doorTime, ticketLink, ticketLinkText } = toRefs(
  props.blok
);
</script>

<style scoped lang="scss">
.gig {
  background: #dedede;
  margin: 0px 24px;
  padding: 12px;
  border-radius: 8px;
  margin-bottom: 24px;
  display: flex;
  flex-direction: column;
}

.date {
  display: flex;
  margin-bottom: 8px;
  span {
    margin: 0px 8px;
  }
}

.location {
  font-size: 24px;
  margin-bottom: 8px;
}

.venue {
  margin-bottom: 8px;
}

.ticket_cta {
  width: 100%;
  margin: 8px 0px;
  background: black;
  transition: all 0.2s ease-in-out;
  border-radius: 8px;
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
  a {
    color: white;
    font-size: 16px;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
@media all and (min-width: 1024px) {
  .gig {
    flex-direction: row;
  }
  .ticket_cta {
    width: 200px;
    margin-left: auto;
  }
}
</style>
