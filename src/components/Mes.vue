<template>
  <div class="message">
    <div class="message__head">
      <p class="message__time">{{ date }}</p>
      <p class="message__slash">/</p>
      <p class="message__author">{{ info.authorName }}</p>
      <p class="message__slash">/</p>
      <a href="info.authorUrl" class="message__link">{{ info.authorUrl }}</a>
    </div>
    <div class="message__body" v-html="text"></div>
    <hr />
  </div>
</template>

<script>
export default {
  name: 'message',
  props: ['info'],

  data() {
    return {
      text: this.info.content,
      date: '',
      monthNames: [
        'января',
        'февраля',
        'марта',
        'апреля',
        'мая',
        'июня',
        'июля',
        'августа',
        'сентября',
        'октября',
        'ноября',
        'декабря',
      ],
      wordsTone: [],
      words: [],
      colors: {
        '-1': '#ff0000',
        '-0.9': '#fe2400',
        '-0.8': '#fd4000',
        '-0.7': '#fc5e00',
        '-0.6': '#fb6b00',
        '-0.5': '#fa8700',
        '-0.4': '#f99c00',
        '-0.3': '#f9a800',
        '-0.2': '#f8c500',
        '-0.1': '#f6e800',
        0: '#f5ff00',
        0.1: '#ddff00',
        0.2: '#c4ff00',
        0.3: '#acff00',
        0.4: '#93ff00',
        0.5: '#7fff00',
        0.6: '#6bff00',
        0.7: '#50ff00',
        0.8: '#35ff00',
        0.9: '#20ff00',
        1: '#00ff00',
      },
    };
  },

  methods: {},

  mounted() {
    let fullDate = new Date(Date.parse(this.info.date));
    this.date =
      fullDate.getHours() +
      ':' +
      fullDate.getMinutes() +
      ', ' +
      fullDate.getDate() +
      ' ' +
      this.monthNames[fullDate.getMonth()] +
      ' ' +
      fullDate.getFullYear() +
      'г.';

    this.info.contentPostTones.forEach(item => {
      let word = this.text.slice(item.position, item.position + item.length);
      let color = item.tone;
      let tone = this.colors[color];
      this.wordsTone.push(newObj(word, tone));
    });

    function newObj(word, tone) {
      return {
        word: word,
        tone: tone,
      };
    }

    this.wordsTone.forEach(item => {
      this.text = this.text.replace(
        item.word,
        `<span style="background-color: ${item.tone}">${item.word}</span>`
      );
    });
  },
};
</script>

<style lang="scss">
.message {
  max-width: 1200px;
  margin: 0 auto;
  color: grey;
  padding: 20px;

  &__head {
    display: flex;
    letter-spacing: 1px;
  }

  &__author {
    font-weight: bold;
    color: brown;
  }

  &__link {
    text-decoration: none;
  }

  &__slash {
    margin: 0 2px;
  }

  &__body {
    margin: 15px 0;
  }
}
</style>
