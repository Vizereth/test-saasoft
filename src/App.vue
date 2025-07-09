<script setup lang="ts">
import AccountForm from "./components/AccountForm.vue";
import { QuestionMarkCircleIcon, PlusIcon } from "@heroicons/vue/24/outline";
import { useAccountStore } from "./stores/accountStore";
import { v4 as uuidv4 } from "uuid";

const accountStore = useAccountStore();

const defaultForm = {
  id: uuidv4(),
  rawLabels: "",
  labels: [],
  type: "Локальная",
  login: "",
  password: null,
  isValid: false,
};
</script>

<template>
  <div class="wrapper">
    <main class="content">
      <div class="content__header">
        <h1>Учётные записи</h1>
        <button
          class="content__add-btn"
          @click="accountStore.addAccount(defaultForm)"
        >
          <PlusIcon />
        </button>
      </div>
      <div class="content__tip">
        <div class="content__tip-icon"><QuestionMarkCircleIcon /></div>
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

    button {
      color: black;
      width: 35px;
      height: 35px;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 2px solid black;
      border-radius: 5px;
      transition: opacity 0.15s ease-out;

      &:hover {
        opacity: 0.5;
      }

      svg {
        width: 15px;
        height: 15px;
      }
    }

    h1 {
      font-size: 2rem;
    }
  }

  &__tip {
    color: black;
    display: flex;
    align-items: center;
    gap: 10px;

    &-icon {
      display: flex;
      align-items: center;
      justify-content: center;

      svg {
        width: 30px;
        height: 30px;
      }
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
