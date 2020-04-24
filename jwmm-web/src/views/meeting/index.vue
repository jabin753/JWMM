<template>
  <div>
    <p class="headline">Meetings</p>
    <v-form>
      <v-container>
        <v-text-field placeholder="Week" />
        <v-text-field placeholder="Weekly Lecture" />
        <div class="text-right">
          <v-dialog v-model="newAssignDialogState">
            <template v-slot:activator="{ on }">
              <v-btn v-on="on" text>New assign</v-btn>
            </template>
            <v-card>
              <v-card-title>
                <span class="headline">New Meeting Assign</span>
              </v-card-title>
              <v-card-text>
                <v-container>
                  <v-text-field placeholder="Assign's Title"/>
                  <v-text-field placeholder="Time Length" type="number" />
                  <v-text-field placeholder="Description" />
                  <v-select placeholder="Lesson Attached(Optional)" />
                </v-container>
              </v-card-text>
               <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="newAssignDialogState = false">Close</v-btn>
          <v-btn color="blue darken-1" text @click="addNewAssign">Save</v-btn>
        </v-card-actions>
            </v-card>
          </v-dialog>
        </div>
      </v-container>
      <v-divider></v-divider>
    </v-form>
  </div>
</template>
<script>
export default {
  data: () => ({
    newAssignDialogState: false
  })
}
</script>
