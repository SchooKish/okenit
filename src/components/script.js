this.info.contentPostTones.forEach(item => {
  this.words.push(this.text.slice(item.position, item.position + item.length));
  this.color.push(item.tone);
});

this.words.forEach(item => {
  this.text = this.text.replace(item, `<span>${item}</span>`);
});
console.log(this.color);
