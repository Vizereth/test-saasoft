export type AccountType = {
  id: string;
  rawLabel: string;
  label: { text: string }[];
  type: "LDAP" | "Локальная";
  login: string;
  password: string | null;
  isValid: boolean;
};
