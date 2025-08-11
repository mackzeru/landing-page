import { toast } from "@/hooks/use-toast";

type ApiFunction<T> = (data: T) => Promise<any>;
type ApiFunctionWithMethod<T> = (data: {
  body: T;
  method: "POST" | "PUT" | "DELETE" | "PATCH";
}) => Promise<any>;

const useFormSubmitHandler = <T>(
  apiFunction: ApiFunction<T> | ApiFunctionWithMethod<T>,
  onSuccess: (response: any) => void,
  successMessage?: string,
  isSuccessToastVisible: boolean = true, // Default value set to true
  onError?: (error: any) => void
) => {
  const handleSubmit = async (
    data: T | { body: T; method: "POST" | "PUT" | "DELETE" | "PATCH" }
  ) => {
    try {
      let response;
      // Determine which type of apiFunction is being used
      if ((data as any).method) {
        // If data has a 'method' property, call the function expecting the method
        response = await (apiFunction as ApiFunctionWithMethod<T>)(
          data as { body: T; method: "POST" | "PUT" | "DELETE" | "PATCH" }
        );
      } else {
        // Otherwise, call the function expecting just data
        response = await (apiFunction as ApiFunction<T>)(data as T);
      }

      if (response.error) {
        // console.log(response.error);
        if (
          response.error.data &&
          response.error.data.errors &&
          response.error.data.errors
        ) {
          const errors = response.error.data.errors;

          const concatenatedMessages = errors
            .map((error: any) => error.message)
            .join(", ");
          // console.log(concatenatedMessages);
          toast({
            title: "Error",
            description:
              concatenatedMessages ||
              response.error.data.message ||
              "Something went wrong",
            type: "error" as never,
          });
          onError && onError(response.error);

          return;
        } else {
        }
        // onError(response.error);

        toast({
          title: "Error",
          description: response.error.data.message || "Something went wrong",
          type: "error" as never,
        });
        onError && onError(response.error);
      } else {
        if (isSuccessToastVisible) {
          toast({
            title: "Success",
            description:
              successMessage ||
              response.data?.data?.message ||
              response.data.message,
            type: "success" as never,
          });
        }
        onSuccess(response.data);
      }
      return response;
    } catch (error: any) {
      // console.log("error", error);
      if (onError) {
        onError(error);
      }
      toast({
        title: "Error",
        description: error.data?.data?.error ?? "Something went wrong",
        type: "error" as never,
      });
      return error;
    }
  };

  return handleSubmit;
};

export default useFormSubmitHandler;
