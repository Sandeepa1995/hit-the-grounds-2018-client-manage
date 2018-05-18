<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-layout column align-center>
        <v-container fluid style="max-width: 80%">
          <v-form v-model="valid">
            <h2>
              Start Live Match
            </h2>
            <v-text-field
              v-model="matchName"
              label="Match Name"
              required
            ></v-text-field>
            <v-layout row wrap>
              <v-flex xs6>
                <v-subheader>Team 1 (Batting) </v-subheader>
              </v-flex>
              <v-flex xs6>
                <v-select
                  :items="teams"
                  v-model="team1"
                  label="Select Team 1"
                  single-line
                ></v-select>
              </v-flex>
            </v-layout>

            <v-layout row wrap>
              <v-flex xs6>
                <v-subheader>Team 2 (Bowling) </v-subheader>
              </v-flex>
              <v-flex xs6>
                <v-select
                  :items="teams"
                  v-model="team2"
                  label="Select Team 2"
                  single-line
                ></v-select>
              </v-flex>
            </v-layout>

            <v-text-field
              v-model="umpire1"
              label="Umpire 1"
              required
            ></v-text-field>
            <v-text-field
              v-model="umpire2"
              label="Umpire 2"
              required
            ></v-text-field>

          </v-form>

          <v-btn :disabled="!valid" @click="startMatch" block dark>Start Match</v-btn>
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
        matchName:'',
        teams:[],
        team1:'',
        team2:'',
        umpire1:'',
        umpire2:''
      }
    },
    name: 'StartMatch',
    methods:{
        startMatch(){
          socket.emit("addLiveMatch", {
            name :this.name,
            umpires : [this.umpire1, this.umpire2],
            teams:[this.team1, this.team2]
          }, function(err, res){
            if(err){
              return console.log(err);
            }
            console.log(res);
            alert("Sucess")
          })
        }
    },
    mounted(){
      socket.emit("getTeams",(err, res)=>{
        if(err){
          return console.log(err);
        }
        res.forEach((team) => {
          (this.teams).push(team.name);
        })
      })
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
