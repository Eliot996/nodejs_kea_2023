<script>
  import io from "socket.io-client";
  const socket = io("localhost:8080");

  let color = "#000000";

  function sendColor() {
    socket.emit("a client chose a color", { data: color });
  };

  socket.on("a new color just dropped", (data) => {
    // use a store instead and get app.svelte to subscribe and change the color
    document.body.style.backgroundColor = data.data;
  });
</script>

<input bind:value={ color } type="color">
<buton on:click={ sendColor }>Send Color</buton>