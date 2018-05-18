<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-layout column align-center style="padding: 50px">
        <img src="@/assets/logo.jpg" alt="Hit the Grounds 2018" style="max-height: 300px; margin-bottom: 50px">
        <!--<blockquote>-->
          <!--&#8220;First, solve the problem. Then, write the code.&#8221;-->
          <!--<footer>-->
            <!--<small>-->
              <!--<em>&mdash;John Johnson</em>-->
            <!--</small>-->
          <!--</footer>-->
        <!--</blockquote>-->
        <v-btn @click="addTeam" block dark style="margin-bottom: 20px; max-width: 40%" color="warning">Add Team</v-btn>

        <v-btn @click="startMatch" block dark style="margin-bottom: 20px; max-width: 40%" color="success">Start Match</v-btn>

        <v-btn @click="manageMatch" block dark style="margin-bottom: 20px; max-width: 40%" color="info">Manage Match</v-btn>

      </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>

<script>
  export default {
    data() {
      return {
      }
    },
    methods:{
      addTeam(){
        this.$router.push("/add_team");
      },
      startMatch(){
        this.$router.push("/start_match");
      },
      manageMatch(){
        this.$router.push("/select_match");
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
