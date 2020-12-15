<template>
    <div class="container-fluid">
        <br><br>
        <div class="container">
            <h1 class="display-2">About</h1>
            <p class="lead">Hey there reader, thanks for stopping by and paying a visit to my site! Here's some stuff about me. </p><br>

            <h2 class="display-6">Where I've Been</h2>
            <p>I was born in Kalispell, MT on June 22nd, 1998.
             I've spent most of my life and received my entire education in Montana. Firstly my diploma from Columbia Falls High School, then my Associate's from Flathead Valley Community College, and finally my Bachelor's from The University of Montana (to be finished May 2021).
             Outside of Montana, I've spent a couple years in-between Northern California and Eastern Texas. I married my wonderful wife, Alicia Deibert, on August 8th, 2020. </p>
            <br>

            <h2 class="display-6">Facts</h2>
            <ul>
                <li>I spend a lot of time in the gym. After working at <a href="https://www.accessfitnesskalispell.com/">an awesome one</a> for 2+ years, training became a huge part of who I am. </li>
                <li>I'm an avid fan of the Green Bay Packers and Los Angeles Lakers. Brett Favre and Kobe Bryant were my childhood heroes. </li>
                <li>I listen to a lot of podcasts and read occasionally. I always appreciate recommendations! </li>
            </ul>
            <br>

            <h2 class="display-6">A Weird Fact</h2>
            <p>I declared my computer science major on a whim as an undecided college Sophomore. I hadn't wrote a single line of code prior to my decision. Why, you ask? It sounded more fun than engineering!</p>
        </div>
        <Nav></Nav>
    </div>
</template>

<script>
import Nav from '@/components/Nav'

export default {
    components: {
        Nav,
    }
}
</script>

<style lang="scss" scoped>
    .container-fluid {
        margin-bottom: 150px;
    }
</style>