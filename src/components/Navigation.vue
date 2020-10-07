<template>
  <nav id="nav">
    <ul id="main-nav">
      <li class="nav-item">
        <div>
          <router-link to="/">
            Software Development
          </router-link>
        </div>
        <ul class="sub-nav">
          <li>
            <router-link to="/">
              Our Services
            </router-link>
          </li>
          <li>
            <router-link to="/">
              Focus Areas
            </router-link>
          </li>
          <li>
            <router-link to="/">
              The Intelliware Approach
            </router-link>
          </li>
          <li>
            <router-link to="/">
              Success Stories
            </router-link>
          </li>
        </ul>
      </li>
      <li class="nav-item">
        <div>
          <router-link to="/about">
            Why Intelliware
          </router-link>
        </div>
        <ul class="sub-nav">
          <li>
            <router-link to="/">
              Our Agile Journey
            </router-link>
          </li>
          <li>
            <router-link to="/">
              Technology Leadership
            </router-link>
          </li>
          <li>
            <router-link to="/">
              Community Initiatives
            </router-link>
          </li>
          <li>
            <router-link to="/">
              Leadership Team
            </router-link>
          </li>
        </ul>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Navigation",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  text-decoration: none;
}
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

#main-nav {
  display: flex;
  flex-direction: row;
}

.nav-item {
  flex: 1;
}

.nav-item .sub-nav {
  display: none;
}

.nav-item:hover .sub-nav {
  display: block;
}

.sub-nav {
  position: absolute;
}
</style>
