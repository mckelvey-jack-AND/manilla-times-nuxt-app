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
      <p class="response-message">{{ message }}</p>
    </div>
  </div>
</template>

<script setup>
const email = defineModel();
let message = ref("");

const handleSubmit = async () => {
  const validEmailRegex =
    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
  if (!email.value.match(validEmailRegex)) {
    return (message.value = "Please Enter a Valid Email");
  }
  const { msg } = await $fetch("/api/addEmail", {
    method: "POST",
    body: {
      email: email.value,
    },
  });
  message.value = msg;
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
      &:hover {
        cursor: pointer;
      }
    }
  }
  .response-message {
    margin: 8px 0px;
  }
}
</style>
