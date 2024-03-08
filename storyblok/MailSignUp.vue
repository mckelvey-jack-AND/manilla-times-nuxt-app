<template>
  <section class="form-container">
    <div class="form">
      <label for="signup-form">{{ formLabel }}</label>
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
    <p class="recaptcha-text">
      This site is protected by reCAPTCHA and the Google
      <a href="https://policies.google.com/privacy">Privacy Policy</a> and
      <a href="https://policies.google.com/terms">Terms of Service</a> apply.
    </p>
  </section>
</template>

<script setup>
import { ref, watch } from "vue";
import { useReCaptcha } from "vue-recaptcha-v3";

const props = defineProps({ blok: Object });
const { formLabel, robotErrorMessage, invalidEmailMessage } = toRefs(
  props.blok
);

const recaptchaInstance = useReCaptcha();

const email = ref("");
let errorMessage = ref("");
let successMessage = ref("");

watch(email, async () => {
  setErrorMessage("");
});

const handleSubmit = async () => {
  const validEmailRegex =
    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
  if (!email.value.match(validEmailRegex)) {
    setErrorMessage(invalidEmailMessage);
    return;
  }
  await recaptchaInstance?.recaptchaLoaded();
  const token = await recaptchaInstance?.executeRecaptcha();

  const reCaptchaResult = await $fetch("/api/reCaptcha", {
    method: "POST",
    body: {
      token: token,
    },
  });

  if (!reCaptchaResult.success) {
    setErrorMessage(robotErrorMessage);
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
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px 16px;
  margin-bottom: 60px;
}
.form {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  min-height: 115px;

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
    margin-top: 12px;
  }
}
.recaptcha-text {
  font-size: 10px;
  margin-top: 24px;
  text-align: center;
}
</style>
