import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { StatusProps } from "@/lib/types/StatusProps";
import {
  BookmarkIcon,
  DotsHorizontalIcon,
  Pencil2Icon,
  StarIcon,
} from "@radix-ui/react-icons";
import DOMPurify from "dompurify";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Separator } from "../ui/separator";

export default function SingleStatus({
  id,
  name,
  avatar,
  authorUrl,
  text,
  createdAt,
}: StatusProps) {
  const sanitizedHTMLText = DOMPurify.sanitize(text);

  return (
    <Card role="status" className="my-2">
      <CardHeader className="flex flex-row items-center">
        <Avatar className="mr-3">
          <AvatarImage src={avatar} alt={name} />
          <AvatarFallback>NM</AvatarFallback>
        </Avatar>
        <div>
          <CardTitle>{name}</CardTitle>
          <CardDescription>{authorUrl}</CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <div dangerouslySetInnerHTML={{ __html: sanitizedHTMLText }} />
      </CardContent>
      <CardFooter className="flex flex-col">
        <div role="date" className="w-full my-3">
          {createdAt}
        </div>
        <Separator />
        <div role="actions" className="mt-5 flex w-full justify-evenly text-xl">
          <Pencil2Icon />
          <BookmarkIcon />
          <StarIcon />
          <DotsHorizontalIcon />
        </div>
      </CardFooter>
    </Card>
  );
}
