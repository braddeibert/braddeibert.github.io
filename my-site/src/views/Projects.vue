<template>
    <div class="container-fluid">
        <br><br>
        <div class="container">
            <h1 class="display-2">Projects</h1>

            <h2 class="display-6">Project 1</h2>
            <p>Description</p>

            <h2 class="display-6">Project 2</h2>
            <p>Description</p>

            <h2 class="display-6">Project 3</h2>
            <p>Description</p>

            <p>*check out more on my GitHub</p>
        </div>
        <Nav></Nav>
    </div>
</template>

<script>
import Nav from "@/components/Nav"

export default {
    components: {
        Nav,
    }
}
</script>