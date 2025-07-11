<script setup lang="ts">
import { defaultForm } from "./config/defaultForm";
import AccountForm from "./components/AccountForm.vue";
import { LightBulbIcon, PlusIcon } from "@heroicons/vue/24/outline";
import { useAccountStore } from "./stores/accountStore";
import { v4 as uuidv4 } from "uuid";

const accountStore = useAccountStore();
</script>

<template>
  <div class="wrapper">
    <main class="content">
      <div class="content__header">
        <h1>Учётные записи</h1>
        <button
          class="content__add-btn"
          @click="accountStore.addAccount({ ...defaultForm, id: uuidv4() })"
        >
          <PlusIcon />
        </button>
      </div>
      <div class="content__tip">
        <div class="content__tip-icon"><LightBulbIcon /></div>
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
      border: 2px solid rgb(41, 41, 41);
      border-radius: 5px;
      transition: all 0.1s ease-out;

      &:hover {
        border: 2px solid rgb(95, 190, 95);
        background: rgb(95, 190, 95);

        svg {
          color: white;
        }
      }

      svg {
        width: 15px;
        height: 15px;
        transition: color 0.1s ease-out;
      }
    }

    h1 {
      font-size: 2rem;
    }
  }

  &__tip {
    color: rgb(41, 41, 41);
    display: flex;
    align-items: center;
    gap: 10px;
    background-color: rgb(245, 244, 244);
    border-radius: 5px;
    padding: 5px 5px 5px 10px;

    &-icon {
      display: flex;
      align-items: center;
      justify-content: center;

      svg {
        width: 25px;
        height: 25px;
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
