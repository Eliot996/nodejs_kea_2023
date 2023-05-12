<script>
    import { onMount } from "svelte";
    import {BASE_URL} from "../../Store/globalStore.js"

    onMount(async () => {
        const response = await fetch($BASE_URL + "/planets",{
            credentials: "include"
        });
        const planets = await response.json();
        console.log(planets)
    });
</script>

<h1>This is Planets</h1>