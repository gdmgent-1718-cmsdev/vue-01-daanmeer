<template>
  <div class="hello">
    <h1>
        {{ msg }}
    </h1>
  </div>
</template>
<script>
  import axios from 'axios';
  export default {
    name: 'read-article',
    data() {
      return {
        msg: 'Read'
      }
    } ,
    created() {
      axios
      .get('http://cmsdev.localhost')
      .then(({ data: response }) =>
      {
        console.log(response)
      })
      .catch(({message:error}) => {
        console.info(error)
      })
    }
  }
</script>