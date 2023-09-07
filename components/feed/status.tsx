import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { cn } from "@/lib/utils";
import {
  BookmarkFilledIcon,
  BookmarkIcon,
  StarIcon,
  StarFilledIcon,
  Pencil2Icon,
  DotsHorizontalIcon,
} from "@radix-ui/react-icons";
import { Separator } from "../ui/separator";
import Tilt from "react-parallax-tilt";
import DOMPurify from "dompurify";
import { StatusProps } from "@/lib/types/StatusProps";

export default function Status({
  name,
  avatar,
  authorUrl,
  text,
  createdAt,
}: StatusProps) {
  const sanitizedHTMLText = DOMPurify.sanitize(text);

  return (
    <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5}>
      <Card role="status" className="w-[520px] my-2">
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
          <div
            role="actions"
            className="mt-5 flex w-full justify-evenly text-xl"
          >
            <Pencil2Icon />
            <BookmarkIcon />
            <StarIcon />
            <DotsHorizontalIcon />
          </div>
        </CardFooter>
      </Card>
    </Tilt>
  );
}
