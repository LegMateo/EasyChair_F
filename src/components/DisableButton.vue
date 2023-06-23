<template>
  <div>
    <button class="sbtn" type="submit" :disabled="disabled"></button>
  </div>
</template>

<style scoped>
.sbtn:hover {
  animation: pulse 1s;
  transform: scale(1.5);
}

.sbtn[disabled] {
  /* Styles for disabled button */
  opacity: 0.5;
  cursor: not-allowed;
}

.sbtn[disabled]:hover {
  /* Disable hover effect for disabled button */
  transform: none;
  animation: none;
}
.sbtn {
  background-image: url("@/assets/suncobre.png");
  background-position: center;
  background-color: transparent;
  background-size: cover;
  cursor: pointer;
  border: none;
  width: 8vh;
  height: 8vh;
}
</style>

<script>
import { Disable } from "@/services";
import { ajD } from "@/services";
export default {
  props: {
    disabled: {
      type: Boolean,
      required: true,
    },
  } /*
  data() {
    return {
      disabeledParasols: [],
    };
  },
  async mounted() {
    let response = await Disable.disableParasol();
    // console.log(response);
    this.disabeledParasols = response;
    //console.log(this.disabeledParasols);
  },

  methods: {
    isParasolDisabled(parasolId) {
      return this.disabledParasols.includes(parasolId);
    },
  },*/,
};
</script>
