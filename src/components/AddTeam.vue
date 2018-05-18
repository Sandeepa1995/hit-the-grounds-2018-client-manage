<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-layout column align-center>
        <v-container fluid style="max-width: 80%">
          <v-form v-model="valid">
            <h2>
              Team details
            </h2>
            <v-text-field
              v-model="name"
              label="Team Name"
              required
            ></v-text-field>
            <v-text-field
              v-model="company"
              label="Company Name"
              required
            ></v-text-field>
            <v-divider></v-divider>
            <h2 style="padding-top: 50px">
              Members
            </h2>
            <v-text-field
              v-model="member1"
              label="Member 1"
              required
            ></v-text-field>
            <v-text-field
              v-model="member2"
              label="Member 2"
            ></v-text-field>
            <v-text-field
              v-model="member3"
              label="Member 3"
            ></v-text-field>
            <v-text-field
              v-model="member4"
              label="Member 4"
            ></v-text-field>
            <v-text-field
              v-model="member5"
              label="Member 5"
            ></v-text-field>
            <v-text-field
              v-model="member6"
              label="Member 6"
            ></v-text-field>
            <v-text-field
              v-model="member7"
              label="Member 7"
            ></v-text-field>
            <v-text-field
              v-model="member8"
              label="Member 8"
            ></v-text-field>
          </v-form>
          <v-btn :disabled="!valid" @click="addTeam" block dark>Add Team</v-btn>
        </v-container>
      </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>

<script>
  var socket = require('socket.io-client')('http://10.10.22.254:3000');
  export default {
    data () {
      return {
        valid: true,
        name:'',
        company:'',
        member1:'',
        member2:'',
        member3:'',
        member4:'',
        member5:'',
        member6:'',
        member7:'',
        member8:'',
        members:[]
      }
    },
    name: 'AddTeam',
    methods:{
        addTeam(){
          if(this.member1!==''){
            this.members.push(this.member1)
          }
          if(this.member2!==''){
            this.members.push(this.member2)
          }
          if(this.member3!==''){
            this.members.push(this.member3)
          }
          if(this.member4!==''){
            this.members.push(this.member4)
          }
          if(this.member5!==''){
            this.members.push(this.member5)
          }
          if(this.member6!==''){
            this.members.push(this.member6)
          }
          if(this.member7!==''){
            this.members.push(this.member7)
          }
          if(this.member8!==''){
            this.members.push(this.member8)
          }

            socket.emit("addTeam", {
                'teamName':this.name,
                'companyName':this.company,
                'players':this.members
            }, function(err, res){
                if(err){
                    return console.log(err);
                }
                this.$router.push("/");
                location.reload();
            })
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
