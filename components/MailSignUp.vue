<template>
  <div class="form-container">
    <div class="form">
      <label for="signup-form">Subscribe to our mailing list</label>
      <div class="input-container">
        <input id="signup-form" v-model="email" type="text" />
        <button @click="handleSubmit">
          <img class="send-icon" src="../assets/send.svg " alt="send-icon" />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
const email = defineModel();

const handleSubmit = async () => {
  const response = await $fetch("/api/addEmail", {
    method: "POST",
    body: {
      email: email,
    },
  });
  console.log(response);
};
</script>

<style lang="scss" scoped>
.form-container {
  display: flex;
  justify-content: center;
  padding: 0px 16px;
}
.form {
  display: flex;
  flex-direction: column;
  width: 100%;
  @media screen and (min-width: 1024px) {
    width: 600px;
  }
  label {
    font-size: 1.4rem;
    text-align: center;
    margin-bottom: 8px;
  }
  .input-container {
    border: 1px solid gray;
    display: flex;
    align-items: center;
    input {
      padding: 8px;
      border: none;
      width: 100%;
      font-size: 1rem;
    }
    .send-icon {
      width: 50px;
      margin-right: 12px;
    }
  }
}
</style>
