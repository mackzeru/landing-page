// import { useContext, createContext } from "react";

// interface NetworkError {
//   status?: number;
//   message?: string;
//   type?: "network" | "server" | "timeout";
//   timestamp?: number;
// }

// interface NetworkErrorContextType {
//   error: NetworkError | null;
//   setError: (error: NetworkError | null) => void;
//   clearError: () => void;
//   handleRetry: () => void;
// }

// // Create the context
// export const NetworkErrorContext = createContext<
//   NetworkErrorContextType | undefined
// >(undefined);

// export const useNetworkError = (): NetworkErrorContextType => {
//   const context = useContext(NetworkErrorContext);
//   if (context === undefined) {
//     throw new Error(
//       "useNetworkError must be used within a NetworkErrorProvider"
//     );
//   }
//   return context;
// };

// export type { NetworkError, NetworkErrorContextType };
