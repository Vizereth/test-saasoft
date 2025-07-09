<script setup lang="ts">
import AccountForm from "./components/AccountForm.vue";
import { useAccountStore } from "./stores/accountStore";

const accountStore = useAccountStore();
</script>

<template>
  <div class="wrapper">
    <main class="content">
      <div class="content__header">
        <h1>Учётные записи</h1>
        <button class="content__add-btn">+</button>
      </div>
      <div class="content__tip">
        <div class="content__tip-icon">?</div>
        <p class="content__tip-text">
          Для указания нескольких меток для одной пары логин/пароль используйте
          разделитель ;
        </p>
      </div>
      <div class="content__main">
        <AccountForm
          v-for="acc in accountStore.accounts"
          :key="acc.id"
          :initialData="acc"
        />
        <AccountForm />
      </div>
    </main>
  </div>
</template>

<style scoped lang="scss">
.content {
  display: flex;
  flex-direction: column;
  gap: 30px;

  &__header {
    display: flex;
    align-items: center;
    gap: 10px;

    h1 {
      font-size: 2rem;
    }
  }

  &__add-btn {
    border: 2px solid rgba(0, 0, 0, 0.6);
    border-radius: 5px;
    width: 35px;
    height: 35px;
  }

  &__tip {
    display: flex;
    align-items: center;
    gap: 10px;

    &-icon {
      border-radius: 50%;
      border: 2px solid rgba(0, 0, 0, 0.6);
      font-size: 1.1rem;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 30px;
      height: 30px;
    }

    &-text {
      font-size: 1.1rem;
    }
  }

  &__main {
    display: flex;
    flex-direction: column;
    gap: 25px;
  }
}
</style>
