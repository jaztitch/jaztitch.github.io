<script>
var texts = [
  "I am a sentence.",
  "Some nice stuff.",
  "I am random too!"
];

document.getElementById('randomText').value = texts[Math.floor(Math.random()*texts.length)];

<input type="text" id="randomText">
</script>