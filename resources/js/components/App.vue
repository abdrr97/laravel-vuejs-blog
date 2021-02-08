<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card">
          <div class="card-body">This is App Component</div>
          <router-view></router-view>
          <!-- <user /> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import User from "./User/User.vue";
export default {
  components: { User },
  mounted() {
    console.log("Component mounted.");
  },
};
</script>
