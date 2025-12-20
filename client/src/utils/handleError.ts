import { toast } from "sonner";

export const handleError = (error: any) => {
  const message = error?.data?.message || error?.message || "An error occurred";
  console.log(message);
  toast("Error: " + message);
};