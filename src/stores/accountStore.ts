import { defineStore } from "pinia";
import { ref } from "vue";
import type { AccountFormType } from "../types/account";

export const useAccountStore = defineStore("accounts", () => {
  const accounts = ref<AccountFormType[]>([]);

  const addAccount = (acc: AccountFormType) => {
    accounts.value.push(acc);
  };

  const removeAccount = (id: string) =>
    accounts.value = accounts.value.filter((item) => item.id !== id);

  const updateAccount = (acc: AccountFormType) => {
    const i = accounts.value.findIndex((item) => item.id === acc.id);
    if (i !== -1) {
      accounts.value[i] = acc;
    }
  };

  return {
    accounts,
    addAccount,
    removeAccount,
    updateAccount,
  };
});
