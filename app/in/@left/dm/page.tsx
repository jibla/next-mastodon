import { cn } from "@/lib/utils";

export default function DirectMessagesLeft() {
  return (
    <>
      <div className="flex flex-col gap-2 p-4 pt-0">
        {[...Array(10)].map((_, index) => (
          <button
            key={index}
            className={cn(
              "flex flex-col items-start gap-2 rounded-lg border p-3 text-left text-sm transition-all hover:bg-accent",
            )}
          >
            <div className="flex w-full flex-col gap-1">
              <div className="flex items-center">
                <div className="flex items-center gap-2">
                  <div className="font-semibold">Elene Shengelia</div>
                  <span className="flex h-2 w-2 rounded-full bg-blue-600" />
                </div>
                <div className={cn("ml-auto text-xs", "text-foreground")}>
                  5h
                </div>
              </div>
              <div className="text-xs font-medium">Hi</div>
            </div>
            <div className="line-clamp-2 text-xs text-muted-foreground">
              abrakadarba
            </div>
          </button>
        ))}
      </div>
    </>
  );
}
