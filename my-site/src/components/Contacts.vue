<template>
    <div>
        <li v-for="contact in contacts" :key="contact.id">
            <a :href="contact.link">
                <i class="icons" :data-feather="contact.icon"></i>
            </a>
        </li>
    </div>
</template>

<script>
export default {
    props: {
        contacts: Array,
    },
}
</script>

<style lang="scss" scoped>
    li {
        display: inline;
    }
    
    .icons {
        color: gray;
        margin-right: .5rem;
        height: 1.25rem;
    }

    svg:hover {
        color: black;
    }
</style>
