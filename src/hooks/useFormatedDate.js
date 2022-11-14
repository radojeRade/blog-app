import { format } from "date-fns";

export default function useFormatedDate(
  str,
  outputFormat = "yyyy-mm-dd hh:mm:ss"
) {
  if (str) {
    const result = format(new Date(String(str)), outputFormat);
    return result;
  }
}
