import SearchInput from "@/components/SearchInput";
import { UserButton } from "@clerk/nextjs";

export default function RootPage() {
  return (
    <div className="h-full p-4 space-y-2">
      <SearchInput />
    </div>
  );
}
