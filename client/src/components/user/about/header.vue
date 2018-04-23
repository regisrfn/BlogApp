<template>
  <nav class="navbar navbar-expand-sm navbar-light bg-light">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" v-on:click="$emit('input', 'profile')">
          Profile <span class="sr-only">(current)</span>
        </a>
      </li>
      <li class="nav-item">
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
