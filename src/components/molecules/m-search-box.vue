<template>
  <div class="field">
    <div class="ps_search control has-icons-right">
      <atom-input
        @input="search"
        class="input has-text-weight-semibold"
        :placeholder="placeholder"
        :value="value"
      />
      <span class="icon is-small is-right">
        <atom-boxicon
          :name="name"
          :color="color"
          :size="size"
          :animation="animation"
        />
      </span>
      <ul class="ps_searchbox" v-if="toggle">
        <li
          @click="flytosrp(result)"
          :key="result"
          v-for="result in results.slice(0, 3)"
          class="ps_searchbox_list"
        >
          {{ result }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import AtomInput from "@/components/atoms/atom-input/atom-input.vue";
import AtomBoxicon from "../atoms/atom-boxicons/atom-boxicon.vue";

export default {
  name: "m-search-box",
  components: {
    AtomInput,
    AtomBoxicon,
  },
  data() {
    return {
      toggle: false, //search list
      name: "search",
      color: "black",
      size: "sm",
      animation: "tada",
      placeholders: "Search your spot...",
      value: "",
    };
  },
  props: {
    results: Array,
    fieldName: String,
  },
  computed: {
    placeholder() {
      if (this.fieldName) {
        return (this.placeholders = this.fieldName);
      }
      return this.placeholders;
    },
  },
  methods: {
    //this is from input element
    search(value) {
      // console.log(value)
      // let searchData = ""
      // searchData =  searchData + value.data
      this.toggle = true;
      this.$emit("search", value);
    },
    //this is from list of search results
    flytosrp(result) {
      this.toggle = false;
      this.value = result;
      this.$emit("flytosrp", result);
    },
    // flytosrps(){
    // this.$emit('flysrp',this.results[0])    on keyup.enter not working
    // }
  },
};
</script>
<style scoped>
.ps_searchbox {
  position: absolute;
  width: 100%;
  list-style-type: none;
  padding: 0;
  margin: 0;
  z-index: 2;
}
.ps_searchbox_list {
  border: 1px solid #ddd;
  margin-top: -1px; /* Prevent double borders */
  background-color: #f6f6f6;
  padding: 12px;
  text-decoration: none;
  font-size: 12px;
  color: black;
  display: block;
}
.ps_searchbox_list:hover {
  background-color: #eee;
}
</style>