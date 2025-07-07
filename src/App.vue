<script setup lang="ts">
import AccountForm from "./components/AccountForm.vue";
</script>

<template>
  <div class="content">
    <div class="content__header">
      <h1>Учётные записи</h1>
      <button>`+`</button>
    </div>
    <div class="content__tip">
      <div class="content__tip-icon">{`?`}</div>
      <p class="content__tip-text">
        {`Для указания нескольких меток для одной пары логин/пароль используйте
        разделитель ;`}
      </p>
    </div>
    <div class="content__main">
      <AccountForm />
    </div>
  </div>
</template>

<style scoped lang="scss">
.content {
  display: flex;
  flex-direction: column;
  gap: 20px;

  &__header {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  &__add-btn {
    border: 2px solid lightblue;
    border-radius: 5px;
    padding: 10px;
  }

  &__tip {
    display: flex;
    align-items: center;
    gap: 10px;

    &-icon {
      border-radius: 50%;
      border: 2px solid black;
      font-size: 1.5rem;
    }

    &-text {
      font-size: 1.2rem;
    }
  }

  &__main {
    display: flex;
    flex-direction: column;
    gap: 25px;
  }
}
</style>
