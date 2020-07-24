<template>
  <div>

    <ValidationProvider rules="even" v-slot="{ errors }">
      <input v-model="even" type="number" placeholder="type something" />
      <span>{{ errors[0] }}</span>
    </ValidationProvider>

    <br />

    <ValidationProvider name="age" rules="positive" v-slot="{ errors }">
      <input v-model="positive" type="text" />
      <span class="validate">{{ errors[0] }}</span>
    </ValidationProvider>

    <br />

    <ValidationProvider rules="positive|odd" v-slot="{ errors }">
      <input v-model="value" type="number" />
      <span>{{ errors[0] }}</span>
    </ValidationProvider>

    <br />

    <ValidationProvider rules="positive|odd|prime|fib" v-slot="{ errors }">
      <input v-model="value" type="number" />
      <span>{{ errors[0] }}</span>
    </ValidationProvider>

    <br />

    <ValidationProvider rules="minLength:3" v-slot="{ errors }">
      <input v-model="value" type="text" />
      <span>{{ errors[0] }}</span>
    </ValidationProvider>

    <br />

    <ValidationProvider rules="minLength:6" v-slot="{ errors }">
      <input v-model="value" type="text" />
      <span>{{ errors[0] }}</span>
    </ValidationProvider>

    <br />
    <br />

    <ValidationProvider rules="minmax:3,8" v-slot="{ errors }">
      <input v-model="value" type="text" />
      <span>{{ errors[0] }}</span>
    </ValidationProvider>

    <br />
    <br />

    <ValidationProvider rules="one_of:1,2,3,4,5,6,7,8,9" v-slot="{ errors }">
      <input v-model="value" type="text" />
      <span>{{ errors[0] }}</span>
    </ValidationProvider>
    <br />
    <ValidationProvider
      rules="positive|odd|prime|fib"
      :bails="false"
      v-slot="{ errors }"
    >
      <input v-model="value" type="text" />
      <ul>
        <li v-for="error in errors" :key="error">{{ error }}</li>
      </ul>
    </ValidationProvider>
  </div>
</template>

<script>
export default {
  data () {
    return {
      even: '',
      positive: '',
      value: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.validate {
  display: block;
  color: red;
  font-size: 5px;
}
</style>
