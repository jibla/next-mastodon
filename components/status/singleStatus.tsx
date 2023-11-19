import { StatusProps } from "@/lib/types/StatusProps";

export default function SingleStatus({
  id,
  name,
  avatar,
  authorUrl,
  text,
  createdAt,
}: StatusProps) {
  const sanitizedHTMLText = DOMPurify.sanitize(text);

  return "TODO: implement me";
}
