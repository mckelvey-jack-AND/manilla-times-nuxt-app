<template>
  <div class="form-container">
    <div class="form">
      <label for="signup-form">Subscribe to our mailing list</label>
      <div
        class="input-container"
        :class="{ 'error-border': errorMessage && email }"
      >
        <input id="signup-form" v-model="email" type="text" />
        <button @click="handleSubmit">
          <img class="send-icon" src="../assets/send.svg " alt="send-icon" />
        </button>
      </div>
      <p v-if="errorMessage && email" class="response-message error">
        {{ errorMessage }}
      </p>
      <p v-if="successMessage && email" class="response-message success">
        {{ successMessage }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
const email = ref("");
let errorMessage = ref("");
let successMessage = ref("");

watch(email, async (oldEmail, newEmail) => {
  setErrorMessage("");
});

const handleSubmit = async () => {
  const validEmailRegex =
    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
  if (!email.value.match(validEmailRegex)) {
    setErrorMessage("Please Enter a valid email");
    return;
  }
  const { msg, error } = await $fetch("/api/addEmail", {
    method: "POST",
    body: {
      email: email.value,
    },
  });
  error ? setErrorMessage(msg) : setSuccessMessage(msg);
};

const setErrorMessage = (message) => {
  successMessage.value = "";
  errorMessage.value = message;
};
const setSuccessMessage = (message) => {
  errorMessage.value = "";
  successMessage.value = message;
};
</script>

<style lang="scss" scoped>
.form-container {
  display: flex;
  justify-content: center;
  padding: 0px 16px;
  margin: 48px 0px;
  min-height: 140px;
}
.form {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  @media screen and (min-width: 1024px) {
    width: 600px;
  }
  label {
    font-size: 1.2rem;
    text-align: center;
    margin-bottom: 8px;
    text-transform: uppercase;
    font-weight: bold;
  }
  .input-container {
    border: 1px solid gray;
    display: flex;
    align-items: center;
    -webkit-box-shadow: 10px 10px 5px 0px rgba(184, 184, 184, 1);
    -moz-box-shadow: 10px 10px 5px 0px rgba(184, 184, 184, 1);
    box-shadow: 10px 10px 5px 0px rgba(184, 184, 184, 1);
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

  .error-border {
    border: 2px solid red;
  }

  .error {
    color: red;
  }
  .success {
    color: green;
  }

  .response-message {
    margin: 8px 0px;
  }
}
</style>
