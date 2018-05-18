<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-layout column align-center>
        <v-container fluid style="max-width: 80%">
          <v-form v-model="valid">
            <v-layout row wrap>
              <v-flex xs6>
                <v-subheader>Get match</v-subheader>
              </v-flex>
              <v-flex xs6>
                <v-select
                  :items="matches"
                  v-model="manageMatch"
                  label="Select the match"
                  single-line
                ></v-select>
              </v-flex>
            </v-layout>
            <v-btn :disabled="!valid" @click="startMatch" block dark style="margin-bottom: 20px">Manage Match</v-btn>
            <v-divider style="padding-bottom: 50px"></v-divider>
          </v-form>
        </v-container>
        <v-subheader v-if="matchName.length>0"><h2>{{matchName}}</h2></v-subheader>
        <v-container fluid style="max-width: 80%" v-if="matchName.length>0">
          <v-layout row wrap>
            <v-flex xs3>
              <v-subheader>State</v-subheader>
            </v-flex>
            <v-flex xs4>
              <v-select
                :items="matchState"
                v-model="matchState"
                label="Select the state of the match"
                single-line
              ></v-select>
            </v-flex>
            <v-flex xs4 offset-xs1>
              <v-btn color="warning" @click="updateMatchState" block>Update</v-btn>
            </v-flex>
          </v-layout>
        </v-container>

        <v-container fluid style="max-width: 80%" v-if="matchName.length>0">
          <v-divider style="padding-bottom: 50px"></v-divider>

          <v-subheader ><h3>{{team1}}</h3></v-subheader>
          <v-divider></v-divider>
          <v-form v-model="validt1b1">
            <v-layout row wrap>
              <v-flex xs4>
                <v-subheader>Batsman 1</v-subheader>
              </v-flex>
              <v-flex xs4>
                <v-select
                  :items="team1Members"
                  v-model="t1Batter1"
                  label="Select batsman 1 of team 1"
                  single-line
                ></v-select>
              </v-flex>
              <v-flex xs2>
                <v-text-field v-model="t1b1Score" type="number" style="padding-left: 10px; padding-right: 10px"></v-text-field>
              </v-flex>
              <v-flex xs2>
                <v-btn color="error" @click="updatet1b1" block>Update</v-btn>
              </v-flex>
            </v-layout>
          </v-form>

          <v-form v-model="validt1b2">
            <v-layout row wrap>
              <v-flex xs4>
                <v-subheader>Batsman 2</v-subheader>
              </v-flex>
              <v-flex xs4>
                <v-select
                  :items="team1Members"
                  v-model="t1Batter2"
                  label="Select batsman 2 of team 1"
                  single-line
                ></v-select>
              </v-flex>
              <v-flex xs2>
                <v-text-field v-model="t1b2Score" type="number" style="padding-left: 10px; padding-right: 10px"></v-text-field>
              </v-flex>
              <v-flex xs2>
                <v-btn color="error" @click="updatet1b2" block>Update</v-btn>
              </v-flex>
            </v-layout>
          </v-form>

          <v-divider></v-divider>

          <v-form v-model="validt1bowl">
            <v-layout row wrap>
              <v-flex xs2>
                <v-subheader>Bowler</v-subheader>
              </v-flex>
              <v-flex xs4>
                <v-select
                  :items="team2Members"
                  v-model="t1Bowler"
                  label="Select bowler against team 1"
                  single-line
                ></v-select>
              </v-flex>
              <v-flex xs2>
                <v-text-field v-model="t1BowlWick" type="number" style="padding-left: 10px; padding-right: 10px"></v-text-field>
              </v-flex>
              <v-flex xs2>
                <v-text-field v-model="t1BowlOvers" type="number" style="padding-left: 10px; padding-right: 10px"></v-text-field>
              </v-flex>
              <v-flex xs2>
                <v-btn color="error" @click="updatet1bowl" block>Update</v-btn>
              </v-flex>
            </v-layout>
          </v-form>

          <v-divider></v-divider>

          <v-form v-model="validt1over">
            <v-layout row wrap>
              <v-flex xs2>
                <v-subheader>Overall</v-subheader>
              </v-flex>
              <v-flex xs2>
                <v-text-field v-model="t1NoBalls" type="number" style="padding-left: 10px; padding-right: 10px" label="No Balls"></v-text-field>
              </v-flex>
              <v-flex xs2>
                <v-text-field v-model="t1Wide" type="number" style="padding-left: 10px; padding-right: 10px" label="Wides"></v-text-field>
              </v-flex>
              <v-flex xs2>
                <v-text-field v-model="t1Score" type="number" style="padding-left: 10px; padding-right: 10px" label="Score"></v-text-field>
              </v-flex>
              <v-flex xs2>
                <v-text-field v-model="t1Wickets" type="number" style="padding-left: 10px; padding-right: 10px" label="Wickets"></v-text-field>
              </v-flex>
              <v-flex xs2>
                <v-btn color="error" @click="updatet1overall" block>Update</v-btn>
              </v-flex>
            </v-layout>
          </v-form>

          <v-divider style="padding-bottom: 50px"></v-divider>

          <v-subheader ><h3>{{team2}}</h3></v-subheader>
          <v-divider></v-divider>
          <v-form v-model="validt2b1">
            <v-layout row wrap>
              <v-flex xs4>
                <v-subheader>Batsman 1</v-subheader>
              </v-flex>
              <v-flex xs4>
                <v-select
                  :items="team2Members"
                  v-model="t2Batter1"
                  label="Select batsman 1 of team 2"
                  single-line
                ></v-select>
              </v-flex>
              <v-flex xs2>
                <v-text-field v-model="t2b1Score" type="number" style="padding-left: 10px; padding-right: 10px"></v-text-field>
              </v-flex>
              <v-flex xs2>
                <v-btn color="error" @click="updatet2b1" block>Update</v-btn>
              </v-flex>
            </v-layout>
          </v-form>

          <v-form v-model="validt2b2">
            <v-layout row wrap>
              <v-flex xs4>
                <v-subheader>Batsman 2</v-subheader>
              </v-flex>
              <v-flex xs4>
                <v-select
                  :items="team2Members"
                  v-model="t2Batter2"
                  label="Select batsman 2 of team 2"
                  single-line
                ></v-select>
              </v-flex>
              <v-flex xs2>
                <v-text-field v-model="t2b2Score" type="number" style="padding-left: 10px; padding-right: 10px"></v-text-field>
              </v-flex>
              <v-flex xs2>
                <v-btn color="error" @click="updatet2b2" block>Update</v-btn>
              </v-flex>
            </v-layout>
          </v-form>

          <v-divider></v-divider>

          <v-form v-model="validt2bowl">
            <v-layout row wrap>
              <v-flex xs2>
                <v-subheader>Bowler</v-subheader>
              </v-flex>
              <v-flex xs4>
                <v-select
                  :items="team1Members"
                  v-model="t2Bowler"
                  label="Select bowler against team 2"
                  single-line
                ></v-select>
              </v-flex>
              <v-flex xs2>
                <v-text-field v-model="t2BowlWick" type="number" style="padding-left: 10px; padding-right: 10px"></v-text-field>
              </v-flex>
              <v-flex xs2>
                <v-text-field v-model="t2BowlOvers" type="number" style="padding-left: 10px; padding-right: 10px"></v-text-field>
              </v-flex>
              <v-flex xs2>
                <v-btn color="error" @click="updatet2bowl" block>Update</v-btn>
              </v-flex>
            </v-layout>
          </v-form>

          <v-divider></v-divider>

          <v-form v-model="validt2over">
            <v-layout row wrap>
              <v-flex xs2>
                <v-subheader>Overall</v-subheader>
              </v-flex>
              <v-flex xs2>
                <v-text-field v-model="t2NoBalls" type="number" style="padding-left: 10px; padding-right: 10px" label="No Balls"></v-text-field>
              </v-flex>
              <v-flex xs2>
                <v-text-field v-model="t2Wide" type="number" style="padding-left: 10px; padding-right: 10px" label="Wides"></v-text-field>
              </v-flex>
              <v-flex xs2>
                <v-text-field v-model="t2Score" type="number" style="padding-left: 10px; padding-right: 10px" label="Score"></v-text-field>
              </v-flex>
              <v-flex xs2>
                <v-text-field v-model="t2Wickets" type="number" style="padding-left: 10px; padding-right: 10px" label="Wickets"></v-text-field>
              </v-flex>
              <v-flex xs2>
                <v-btn color="error" @click="updatet2overall" block>Update</v-btn>
              </v-flex>
            </v-layout>
          </v-form>

          <v-divider style="padding-bottom: 50px"></v-divider>

          <v-data-table
            :headers="headers"
            :items="players"
            hide-actions
            class="elevation-1"
          >
            <template slot="items" slot-scope="props">
              <td>{{ props.item.name }}</td>
              <td class="text-xs-right">{{ props.item.team }}</td>
              <td class="text-xs-right">{{ props.item.score }}</td>
              <td class="text-xs-right">{{ props.item.wick }}</td>
              <td class="text-xs-right">{{ props.item.overs }}</td>
            </template>
          </v-data-table>

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
        validt1b1:true,
        validt1b2:true,
        validt1bowl:true,
        validt1over:true,
        validt2b1:true,
        validt2b2:true,
        validt2bowl:true,
        validt2over:true,


        matches:["ec1" , "ex1"],
        manageMatch:'',
        matchName:'AAA',
        matchState:'',
        matchStates:["Ongoing", "Finished", "Break"],
        team1Members:["A","B"],
        team2Members:["C","D"],

        team1:"T1",
        t1Batter1:"t1b1",
        t1b1Score:0,
        t1Batter2:"t1b2",
        t1b2Score:0,
        t1Bowler:"t1bowl",
        t1BowlOvers:0,
        t1BowlWick:0,
        t1NoBalls:0,
        t1Wide:0,
        t1Wickets:0,
        t1Score:0,

        team2:"T2",
        t2Batter1:"t2b1",
        t2b1Score:0,
        t2Batter2:"t2b2",
        t2b2Score:0,
        t2Bowler:"t2bowl",
        t2BowlOvers:0,
        t2BowlWick:0,
        t2NoBalls:0,
        t2Wide:0,
        t2Wickets:0,
        t2Score:0,

        headers: [
          {
            text: 'Player',
            align: 'left',
            value: 'name'
          },
          { text: 'Team', value: 'team' },
          { text: 'Score', value: 'score' },
          { text: 'Wickets', value: 'wick' },
          { text: 'Overs', value: 'overs' }
        ],

        players:[
          {
          name: "A",
          team: "T1",
          score: 2,
          wick: 3,
          overs: 4
          }
        ]

      }
    },
    name: 'StartMatch',
    methods:{
      startMatch(){
        // socket.emit("startMatch", {
        //   'teamName':this.name
        // }, function(err, res){
        //   if(err){
        //     return console.log(err);
        //   }
        //   alert("Sucess")
        // })
      },
      updatet1b1(){

      },
      updatet1b2(){

      },
      updatet1bowl(){

      },
      updatet1overall(){

      },
      updatet2b1(){

      },
      updatet2b2(){

      },
      updatet2bowl(){

      },
      updatet2overall(){

      },
      updateMatchState(){

      }

    },
    // mounted(){
    //   socket.emit("getMatches",(err, res)=>{
    //     if(err){
    //       return console.log(err);
    //     }
    //     res.forEach((macth) => {
    //       (this.macth).push(macth.name);
    //     })
    //   })
    // }
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
