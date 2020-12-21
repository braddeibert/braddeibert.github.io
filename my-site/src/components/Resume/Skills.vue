<template>
    <div>
        <h2 class="display-6">skills</h2>
        <p>Strongest are <mark>highlighted</mark></p>
        <div class="container-fluid row">
            <div class="col" v-for="category in skills" :key="category.id">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title"> {{ category.name }}</h5>
                        <p class="card-text">
                            <ul>
                                <li v-for="(skill, index) in category.list" :key="index">
                                    <mark v-if="category.strong[index] == 1">{{ skill }}</mark>
                                    <div v-else>{{ skill }}</div>
                                </li>
                            </ul>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        skills: Array,
    }
}
</script>

<style lang="scss" scoped>
    .container-fluid {
        margin-bottom: 3rem;
    }
    .card {
        background-color: $body-bg;
        border: 1px solid gray;
        width: 100%;
        height: auto;
        min-height: 250px;
        margin: 0.5rem;
    }
    mark {
        color: $green;
        background-color: #2c2e32;
    }
</style>