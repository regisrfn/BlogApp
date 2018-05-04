<template>
    <nav class="navbar navbar-expand-sm navbar-light bg-green px-0">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a :class="{active : isActive === 'profile' }" v-on:click="$emit('input', 'profile')" @click="isActive = 'profile'" class="nav-link">
                    Profile
                    </a>
                </li>
                <li :class="{active : isActive === 'blogs' }" @click="isActive = 'blogs'" class="nav-item">
                    <a class="nav-link" v-on:click="$emit('input', 'blogs')">Blogs</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Friends</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Photos</a>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
export default {
    data () {
        return {
            class: ['profile', 'photos'],
            isActive: 'profile'
        }
    }
}
</script>

<style scoped>
.active {
    background-color: rgb(72, 248, 48);
}
.bg-green {
    background-color: rgba(144, 230, 17, 0.507)
}
a {
    cursor: pointer;
}
</style>
