export type AccountType = "LDAP" | "Локальная";

export type AccountFormType = {
  id: string;
  rawLabels: string;
  labels: { text: string }[];
  type: string;
  login: string;
  password: string | null;
  isValid: boolean;
};
