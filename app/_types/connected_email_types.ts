interface ConnectedEmailType {
  email: string;
  status: "valid" | "invalid";
  isExpired?: boolean;
}
export type ConnectedEmailsList = ConnectedEmailType[];
