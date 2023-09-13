import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { StatusProps } from "@/lib/types/StatusProps";
import {
  BookmarkIcon,
  DotsHorizontalIcon,
  Pencil2Icon,
  StarIcon,
} from "@radix-ui/react-icons";
import DOMPurify from "dompurify";
import Tilt from "react-parallax-tilt";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Separator } from "../ui/separator";
import Link from "next/link";

export default function Status({
  id,
  name,
  avatar,
  authorUrl,
  text,
  createdAt,
}: StatusProps) {
  const sanitizedHTMLText = DOMPurify.sanitize(text);

  return (
    <Link href={`/in/status/${id}`}>
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
    </Link>
  );
}
