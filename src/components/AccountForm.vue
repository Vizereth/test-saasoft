<script setup lang="ts"></script>

<template>
  <form action="" class="account-form">
    <div class="account-form__field">
      <label for="tags"><span>Метки</span></label>
      <input type="text" id="tags" />
    </div>
    <div class="account-form__field">
      <label for="type">
        <span>Тип записи</span>
      </label>
      <select name="type" id="type"></select>
    </div>
    <div class="account-form__field">
      <label for="login">
        <span>Логин</span>
      </label>
      <input type="text" id="login" />
    </div>
    <div class="account-form__field">
      <label for="password">
        <span>Пароль</span>
      </label>
      <input type="text" id="password" />
    </div>
    <button class="delete=-btn">Icon</button>
  </form>
</template>

<style scoped lang="scss">
.account-form {
  &:not(:first-of-type) {
    label span {
      display: none;
    }
  }
}
</style>
