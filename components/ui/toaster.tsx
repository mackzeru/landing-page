"use client";

import { useToast } from "@/hooks/use-toast";
import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "@/components/ui/toast";
import { Info, Check, X, TriangleAlert } from "lucide-react"; // Import icons

const toastTypes = {
  info: {
    color: "",
    icon: <Info className="h-6 w-6 text-[#5458F7]" />,
  },
  success: {
    color: "",
    icon: <Check className="h-6 w-6 text-[#00CC99] " />,
  },
  error: {
    color: "",
    icon: <X className="h-6 w-6 text-[#EB5757]" />,
  },
  warning: {
    color: "",
    icon: <TriangleAlert className="h-6 w-6 text-[#F2C94C]" />,
  },
};
type ToastType = "info" | "success" | "error" | "warning";
export function Toaster() {
  const { toasts } = useToast();

  return (
    <ToastProvider>
      {toasts.map(({ id, title, description, action, type, ...props }) => {
        // Ensure type is one of the keys
        const toastType = type || "info"; // Default to 'info' if type is undefined
        // const { icon } = toastTypes[toastType]; // No need for fallback since type is guarantee

        // Set default type if toastType is not found
        const { icon } = toastTypes[toastType] || toastTypes.info;
        return (
          <Toast key={id} variant={toastType} {...props}>
            <div className="flex items-center space-x-2">
              {icon}
              <div className="grid gap-1">
                {title && <ToastTitle>{title}</ToastTitle>}
                {description && (
                  <ToastDescription>{description}</ToastDescription>
                )}
              </div>
            </div>
            {action}
            <ToastClose />
          </Toast>
        );
      })}
      <ToastViewport className={""} />
    </ToastProvider>
  );
}

// export function Toaster() {
//   const { toasts } = useToast();

//   return (
//     <ToastProvider>
//       {toasts.map(({ id, title, description, action, type, ...props }) => {
//         const toastType = type as keyof typeof toastTypes; // Ensure type is one of the keys
//         const { color, icon } = toastTypes[toastType] || toastTypes.info; // Default to info type

//         return (
//           <Toast key={id} className={`${color}`} {...props}>
//             <div className="flex items-center space-x-2">
//               {icon}
//               <div className="grid gap-1">
//                 {title && <ToastTitle>{title}</ToastTitle>}
//                 {description && (
//                   <ToastDescription>{description}</ToastDescription>
//                 )}
//               </div>
//             </div>
//             {action}
//             <ToastClose />
//           </Toast>
//         );
//       })}
//       <ToastViewport />
//     </ToastProvider>
//   );
// }
