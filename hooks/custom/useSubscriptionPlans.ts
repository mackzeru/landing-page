// import { useState, useMemo, useEffect } from "react";
// import {
//   useGetAllPlansQuery,
//   useCheckoutMutation,
// } from "@/services/subscription-services";
// import type { IPlans } from "@/services/subscription-services";

// /**
//  * Represents the billing cycle options for subscription plans
//  */
// type BillingCycle = "MONTHLY" | "YEARLY";

// /**
//  * Return type for the useSubscriptionPlans hook
//  */
// interface UseSubscriptionPlansReturn {
//   plans: IPlans[] | undefined;
//   filteredPlans: IPlans[];
//   isLoading: boolean;
//   error: unknown;
//   selectedBillingCycle: BillingCycle;
//   setSelectedBillingCycle: (cycle: BillingCycle) => void;
//   handleSelectPlan: (planId: string) => void;
//   refetch: () => void;
//   toggleBillingCycle: () => void;
//   isCheckoutLoading: boolean;
//   checkoutId: string | null;
//   checkoutError: unknown;
//   showSuccessModal: boolean;
//   showErrorModal: boolean;
//   closeSuccessModal: () => void;
//   closeErrorModal: () => void;
//   setShowSuccessModal: (show: boolean) => void;
//   setShowErrorModal: (show: boolean) => void;
// }

// /**
//  * Custom hook to manage subscription plans data and interactions
//  *
//  * Features:
//  * - Fetches subscription plans from the API
//  * - Manages billing cycle selection (monthly/yearly)
//  * - Filters plans based on selected billing cycle
//  * - Sorts plans by price for consistent display
//  * - Provides plan selection handler
//  *
//  * @param currentPlanId - Optional ID of the user's current subscription plan
//  * @returns Object containing plans data and interaction handlers
//  */
// export const useSubscriptionPlans = (): UseSubscriptionPlansReturn => {
//   const { data: plans, isLoading, error, refetch } = useGetAllPlansQuery();
//   const [checkout, { isLoading: isCheckoutLoading, error: checkoutError }] =
//     useCheckoutMutation();
//   const [checkoutId, setCheckoutId] = useState<string | null>(null);
//   const [selectedBillingCycle, setSelectedBillingCycle] =
//     useState<BillingCycle>("MONTHLY");
//   const [showSuccessModal, setShowSuccessModal] = useState(false);
//   const [showErrorModal, setShowErrorModal] = useState(false);

//   // Filter and sort plans by selected billing cycle and price
//   const filteredPlans = useMemo(() => {
//     const filtered =
//       plans?.filter((plan) => plan.billingCycle === selectedBillingCycle) || [];

//     // Sort plans by price (ascending)
//     return [...filtered].sort((a, b) => a.price - b.price);
//   }, [plans, selectedBillingCycle]);

//   // Toggle between monthly and yearly billing cycles
//   const toggleBillingCycle = () => {
//     setSelectedBillingCycle((prev) =>
//       prev === "MONTHLY" ? "YEARLY" : "MONTHLY"
//     );
//   };

//   /**
//    * Check URL parameters for success/error status on component mount and when URL changes
//    */
//   useEffect(() => {
//     const checkUrlParams = () => {
//       const url = new URL(window.location.href);
//       const searchParams = new URLSearchParams(url.search);
//       const success = searchParams.get("success");

//       if (success === "true") {
//         setShowSuccessModal(true);
//       } else if (success === "false") {
//         setShowErrorModal(true);
//       }

//       // Remove the success parameter after a delay without reloading the page
//       if (success) {
//         const timeoutId = setTimeout(() => {
//           searchParams.delete("success");
//           const newUrl = `${window.location.pathname}${
//             searchParams.toString() ? `?${searchParams.toString()}` : ""
//           }`;
//           window.history.replaceState({}, "", newUrl);
//         }, 3000);

//         return timeoutId;
//       }
//       return null;
//     };

//     // Check on initial mount
//     const timeoutId = checkUrlParams();

//     // Add event listeners for URL changes
//     const handleUrlChange = () => {
//       checkUrlParams();
//     };

//     // Listen for popstate (browser back/forward buttons)
//     window.addEventListener("popstate", handleUrlChange);

//     // Create a custom event for programmatic URL changes
//     const urlChangeEvent = new Event("urlchange");

//     // Override history methods to detect programmatic URL changes
//     const originalPushState = window.history.pushState;
//     const originalReplaceState = window.history.replaceState;

//     window.history.pushState = function () {
//       originalPushState.apply(this, arguments);
//       window.dispatchEvent(urlChangeEvent);
//     };

//     window.history.replaceState = function () {
//       originalReplaceState.apply(this, arguments);
//       window.dispatchEvent(urlChangeEvent);
//     };

//     // Listen for our custom URL change event
//     window.addEventListener("urlchange", handleUrlChange);

//     // Cleanup
//     return () => {
//       if (timeoutId) clearTimeout(timeoutId);
//       window.removeEventListener("popstate", handleUrlChange);
//       window.removeEventListener("urlchange", handleUrlChange);

//       // Restore original history methods
//       window.history.pushState = originalPushState;
//       window.history.replaceState = originalReplaceState;
//     };
//   }, []);

//   /**
//    * Close success modal
//    */
//   const closeSuccessModal = () => {
//     setShowSuccessModal(false);
//   };

//   /**
//    * Close error modal
//    */
//   const closeErrorModal = () => {
//     setShowErrorModal(false);
//   };

//   /**
//    * Handle plan selection and initiate checkout process
//    *
//    * @param planId - ID of the selected plan
//    */
//   const handleSelectPlan = async (planId: string) => {
//     try {
//       setCheckoutId(planId);
//       // Get the current URL for success and cancel redirects
//       const currentUrl = window.location.href.split("?")[0]; // Remove any existing query params
//       const response = await checkout({
//         planId,
//         successUrl: `${currentUrl}?success=true`,
//         cancelUrl: `${currentUrl}?success=false`,
//       }).unwrap();

//       // Redirect to the checkout URL provided by the API
//       if (response && response.url) {
//         window.location.href = response.url;
//       }
//     } catch (error) {
//       console.error("Checkout error:", error);
//       setShowErrorModal(true);
//     } finally {
//       setCheckoutId(null);
//     }
//   };

//   return {
//     plans,
//     filteredPlans,
//     isLoading,
//     error,
//     selectedBillingCycle,
//     setSelectedBillingCycle,
//     handleSelectPlan,
//     refetch,
//     toggleBillingCycle,
//     isCheckoutLoading,
//     checkoutId,
//     checkoutError,
//     showSuccessModal,
//     showErrorModal,
//     closeSuccessModal,
//     closeErrorModal,
//     setShowSuccessModal,
//     setShowErrorModal,
//   };
// };
