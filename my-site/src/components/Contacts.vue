<template>
    <div>
        <li v-for="contact in contacts" :key="contact.id">
            <a :href="contact.link"><i :class="contact.icon"></i></a>
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