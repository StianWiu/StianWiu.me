<template>
  <div id="bar">
    <div>
      <p class="disable-selection" id="title">{{ this.title }}</p>
    </div>
    <div id="buttons">
      <button @click="$store.dispatch('close', this.windowId)">
        <img src="../assets/close.svg" />
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "TopbarComponent",
  props: {
    title: {
      type: String,
      required: true,
    },
    windowId: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped lang="scss">
#title {
  margin-left: 10px;
  color: #6a50e9;

  font-size: 15px;
}

#bar {
  background-color: #e5a4f4;
  height: 35px;
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;

  cursor: pointer;

  button {
    background-color: #e5a4f4;
    border: 2px solid #a06bcc;

    height: 25px;
    width: 25px;
    padding: 0;

    color: white;
    text-align: center;
    margin: 4px 2px;
    cursor: pointer;

    img {
      height: 100%;
      width: 100%;
    }
  }

  button {
    :hover {
      background-color: #db9ee9;
    }
  }
}

#buttons {
  margin-right: 5px;
}

@media screen and (max-width: 600px) {
  #title {
    font-size: 10px;
  }
}
</style>
