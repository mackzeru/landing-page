// import { useState, useEffect } from "react";

// interface NetworkStatus {
//   isOnline: boolean;
//   isReconnecting: boolean;
//   connectionType?: string;
// }

// export const useNetworkStatus = (): NetworkStatus => {
//   const [isOnline, setIsOnline] = useState(navigator.onLine);
//   const [isReconnecting, setIsReconnecting] = useState(false);
//   const [connectionType, setConnectionType] = useState<string>();

//   useEffect(() => {
//     const handleOnline = () => {
//       setIsOnline(true);
//       setIsReconnecting(false);
//     };

//     const handleOffline = () => {
//       setIsOnline(false);
//       setIsReconnecting(true);
//     };

//     // Get connection type if available
//     const connection =
//       (navigator as any).connection ||
//       (navigator as any).mozConnection ||
//       (navigator as any).webkitConnection;
//     if (connection) {
//       setConnectionType(connection.effectiveType);

//       const handleConnectionChange = () => {
//         setConnectionType(connection.effectiveType);
//       };

//       connection.addEventListener("change", handleConnectionChange);

//       return () => {
//         connection.removeEventListener("change", handleConnectionChange);
//       };
//     }

//     window.addEventListener("online", handleOnline);
//     window.addEventListener("offline", handleOffline);

//     return () => {
//       window.removeEventListener("online", handleOnline);
//       window.removeEventListener("offline", handleOffline);
//     };
//   }, []);

//   // Auto-detect reconnection
//   useEffect(() => {
//     if (!isOnline && isReconnecting) {
//       const checkConnection = async () => {
//         try {
//           await fetch("/api/health", { method: "HEAD", cache: "no-cache" });
//           setIsOnline(true);
//           setIsReconnecting(false);
//         } catch {
//           // Still offline, will try again
//         }
//       };

//       const intervalId = setInterval(checkConnection, 5000);
//       return () => clearInterval(intervalId);
//     }
//   }, [isOnline, isReconnecting]);

//   return { isOnline, isReconnecting, connectionType };
// };
