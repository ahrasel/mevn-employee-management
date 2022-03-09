<template>
  <div class="card text-white">
    <div class="card-body">
      <auth-logo-with-name />
      <form>
        <div class="form-group">
          <label class="text-black-50" for="username">Username</label>
          <input
            type="username"
            class="form-control form-control-lg"
            aria-describedby="usernameHelp"
            placeholder="Enter Username"
          />
        </div>

        <div class="form-group mt-2">
          <label class="text-black-50" for="password">Password</label>
          <input
            type="password"
            class="form-control form-control-lg"
            placeholder="Password"
          />
        </div>

        <div class="form-group form-check mt-2">
          <input type="checkbox" class="form-check-input" />
          <label class="form-check-label text-black-50" for="exampleCheck1">
            Check me out
          </label>
        </div>

        <div class="d-grid mt-4">
          <button type="submit" class="btn btn-primary btn-lg btn-block">
            Submit
          </button>
        </div>

        <div class="mt-3 text-center">
          <nuxt-link to="#" class="text-primary text-decoration-none">
            Forgot password?
          </nuxt-link>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'auth',
})
</script>
