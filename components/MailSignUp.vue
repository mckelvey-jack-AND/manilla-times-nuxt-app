<template>
  <div class="form-container">
    <div class="form">
      <label for="signup-form">Subscribe to our mailing list</label>
      <div class="input-container" :class="errorMessage ? 'error-border' : ''">
        <input id="signup-form" v-model="email" type="text" />
        <button @click="handleSubmit">
          <img class="send-icon" src="../assets/send.svg " alt="send-icon" />
        </button>
      </div>
      <p v-if="errorMessage" class="response-message error">
        {{ errorMessage }}
      </p>
      <p v-if="successMessage" class="response-message success">
        {{ successMessage }}
      </p>
    </div>
  </div>
</template>

<script setup>
const email = defineModel();
let errorMessage = ref("");
let successMessage = ref("");

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
