<script setup lang="ts">
import {comments,gallerySettings} from "~/data/CustomComponents";


const settings = gallerySettings[0];
const showCommentsModal = ref<boolean>(false)




// Define a computed property to track the visibility of replies for each comment
const commentVisibility = computed(() => comments.map(() => ({ hideReplies: true })));

// Function to toggle the visibility of replies for a comment
const toggleReplies = (commentIndex) => {
  commentVisibility.value[commentIndex].hideReplies = !commentVisibility.value[commentIndex].hideReplies;
};

// Flatten the comments and replies into a single array with type markers
const commentItems = computed(() => {
  return comments.flatMap((comment, commentIndex) => {
    return [
      { type: 'comment', ...comment },
      ...comment.replies.map((reply) => ({ type: 'reply', ...reply })),
    ];
  });
});

// Define an async function for the API call
const api = async () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(Array.from({ length: 10 }, (k, v) => v + comments.at(-1) + 1));
    }, 5000);
  });
};

// Define an async function for loading data
const load = async (done) => {
  // Perform API call
  const res = await api();

  // Update the items ref
  comments.push(...res);

  // Call the done callback
  done('ok');
};
</script>

<template>
  <v-dialog
      v-model="showCommentsModal"
      scrollable
      width="auto"
      height="750px"
  >
    <template v-slot:activator="{ props }">
      <v-btn class="text-none px-0 py-0" size="small" v-bind="props">
        <v-badge content="3" :color="settings.iconColor" :text-color="settings.iconBadgeTextColor">
          <v-icon class="mdi mdi-comment-multiple-outline ml-1"  :style="`color: ${settings.iconColor}`"></v-icon>
        </v-badge>
      </v-btn>
    </template>
    <v-card class="mx-auto"
            max-width="374">
      <v-card-title>نظرات</v-card-title>
      <v-divider></v-divider>
      <v-card-text>

        <v-infinite-scroll  :items="comments" :onLoad="load">
          <template v-for="(comment, index) in comments" :key="comment.username">
              <!-- Render Comment -->
              <v-list>
            <v-list-item-title>
              <v-avatar image="https://cdn.vuetifyjs.com/images/lists/2.jpg"></v-avatar>
              <span class="mr-1">{{ comment.username }}</span>
              <v-divider vertical thickness="8"/>
              <span class="mr-1 grey--text font-12">{{ comment.date }}</span>
            </v-list-item-title>
            <div class="pr-7">
              <v-banner  class="border-none text-wrap font-15" :text="comment.text" stacked="">
                <template v-slot:actions>
                  <v-list-item-subtitle>
                    <a @click="" class="text-decoration-none" style="cursor: pointer">پاسخ</a>
                  </v-list-item-subtitle>
                </template>
              </v-banner>

            </div>
          </v-list>
          <v-list class="pr-5">
            <v-list-item  style="color: black" v-for="(reply, replyIndex) in comment.replies" :key="replyIndex">
              <v-list-item-title>
                <v-avatar image="https://cdn.vuetifyjs.com/images/lists/2.jpg"></v-avatar>
                <span class="mr-1">{{ reply.username }}</span>
                <v-divider vertical thickness="8"/>
                <span class="mr-1 grey--text font-12">{{ reply.date }}</span>
              </v-list-item-title>
              <div class="pr-7">
                <v-banner  class="border-none text-wrap font-15" :text="reply.text" stacked="">
                  <template v-slot:actions>
                    <v-list-item-subtitle>
                      <a @click="" class="text-decoration-none" style="cursor: pointer">پاسخ</a>
                    </v-list-item-subtitle>
                  </template>
                </v-banner>
              </div>
            </v-list-item>
            <div class="d-flex pr-5 pt-2"  v-if="comment.replies.length > 0">
              <v-divider thickness="1" length="30px" class="align-self-center"/>
              <v-list-item-subtitle>
                <a variant="outlined"
                   @click="toggleReplies(index)"
                   class="pr-2 text-decoration-none"
                   style="cursor: pointer"> {{ comment.hideReplies ? 'نمایش پاسخها' : 'مخفی کردن' }}
                </a>
              </v-list-item-subtitle>
            </div>
          </v-list>
          </template>
        </v-infinite-scroll>
<!--        TODO: hide replies and show replies handling with text field answer to whom!-->
      </v-card-text>
      <v-divider/>
          <v-text-field label="پاسخ به " class="border-none p-0 m-0"></v-text-field>
      <v-card-actions>
        <v-btn
            color="blue-darken-1"
            variant="text"
            @click="showCommentsModal = false"
        >
          Close
        </v-btn>
        <v-btn
            color="blue-darken-1"
            variant="text"
            @click="showCommentsModal = false"
        >
          Save
        </v-btn>
      </v-card-actions>
    </v-card>

  </v-dialog>
</template>

