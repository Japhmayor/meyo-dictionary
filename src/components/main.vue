<template>
  <div>
    <div class="container">
      <h1 class="text-secondary cursive title">Meyo Dictionary</h1>

      <div class="contents">
        <div class="input-group mb-3">
          <input
            type="text"
            class="form-control p-3 shadow-none"
            id="search"
            placeholder="Type a word"
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
            v-model="searchQuery"
          />
          <div class="input-group-append">
            <button
              class="btn btn-outline-secondary shadow-none"
              type="button"
              id="button-addon2"
              @click="getSearched()"
            >
              Ask Meyo
            </button>
          </div>
        </div>
        <section v-if="errored">
          <p>
            We're sorry, we're not able to retrieve this information at the
            moment, please try back later
          </p>
        </section>

        <section v-else>
          <div v-if="loading">Searching for {{ searchQuery }}</div>
          <div v-else class="jumbotron">
            <h1 class="display-4 text-capitalize">{{ info.word }}</h1>
            <p class="lead">
              Prounouced as :
              <span class="text-danger font-weight-bold"
                >/{{ info.pronunciation }}/</span
              >
            </p>
            <hr class="my-4" />
            <!-- <p>
                    {{ info.definitions[0].type }}
                </p> -->
            <section v-for="i in info.definitions" :key="i.word">
              <p class="cursive">{{ i.type }}</p>
              <p class="text-secondary def">
                <span v-html="i.definition">{{ i.definition }}</span>
                <span>{{ i.emoji }}</span>
              </p>

              <p class="example text-center text-info font-weight-bold">
                "{{ i.example }}"
              </p>
              <img class="rounded-circle" :src="i.image_url" alt="" />
            </section>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
// var Owlbot = require("owlbot-js");
// var client = Owlbot("7ebfb299e250054c27e5776e369e93b6eef18c60");
export default {
  data() {
    return {
      info: null,
      loading: true,
      errored: false,
      searchQuery: "",
    };
  },

  mounted() {
    axios
      .get("https://owlbot.info/api/v4/dictionary/Mascot", {
        headers: {
          Authorization: "Token 7ebfb299e250054c27e5776e369e93b6eef18c60",
        },
      })
      .then((response) => {
        this.info = response.data;
      })
      .catch((error) => {
        console.log(error);
        this.errored = true;
      })
      .finally(() => (this.loading = false));
  },

  methods: {
    getSearched() {
      this.searchQuery = document.getElementById("search").value;
      axios
        .get("https://owlbot.info/api/v4/dictionary/" + this.searchQuery, {
          headers: {
            Authorization: "Token 7ebfb299e250054c27e5776e369e93b6eef18c60",
          },
        })
        .then((response) => {
          this.info = response.data;
        })
        .catch((error) => {
          console.log(error);
          this.errored = true;
        })
        .finally(() => (this.loading = false));
    },
  },
};
</script>

<style scoped>
.cursive {
  font-family: cursive;
}

.container {
  margin-top: -60px;
}

.title {
  font-size: 40px;
  padding-top: 40px;
}

.contents {
  /* border: 1px solid grey; */
  margin-top: 80px;
  width: 700px;
  height: 300px;
  margin-left: auto;
  margin-right: auto;
}

img {
  width: 100px;
}

.def {
  font-size: 16px;
}

.example {
  font-size: 14px;
  color: #bbb;
}

@media (min-width: 320px) and (max-width: 991px) {
  .contents {
    width: 100%;
    height: auto;
    /* margin: 0; */
  }
}
</style>
