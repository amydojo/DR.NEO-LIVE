import { useLayoutEffect, useRef, useState } from "react";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { Check, ChevronDown } from "lucide-react";

interface TagMultiSelectProps {
  options: string[];
  onChange: (selectedTags: string[]) => void;
  placeholder?: string;
}

const TagMultiSelect: React.FC<TagMultiSelectProps> = ({
  options,
  onChange,
  placeholder,
}) => {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const [triggerWidth, setTriggerWidth] = useState(0);

  const toggleTag = (tag: string) => {
    const newTags = selectedTags.includes(tag)
      ? selectedTags.filter((t) => t !== tag)
      : [...selectedTags, tag];
    setSelectedTags(newTags);
    onChange(newTags);
  };

  // Measure trigger width
  useLayoutEffect(() => {
    if (triggerRef.current) {
      setTriggerWidth(triggerRef.current.offsetWidth);
    }
  }, []);

  return (
    <DropdownMenuPrimitive.Root>
      <DropdownMenuPrimitive.Trigger
        ref={triggerRef}
        className="flex h-10 w-full items-center justify-between bg-background text-sm ring-offset-background data-[placeholder]:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1 p-3 border border-gray-300 rounded-lg opacity-65"
      >
        {selectedTags.length > 0 ? selectedTags.join(", ") : placeholder}
        <ChevronDown className="h-4 w-4 opacity-50" />
      </DropdownMenuPrimitive.Trigger>

      <DropdownMenuPrimitive.Portal>
        <DropdownMenuPrimitive.Content
          className="z-50 max-h-[200px] overflow-y-auto rounded-md border bg-white shadow-lg"
          style={{ width: `${triggerWidth}px` }}
        >
          {options.map((option) => (
            <DropdownMenuPrimitive.Item
              key={option}
              className="relative flex cursor-default select-none items-center text-sm p-2 w-full"
              onClick={() => toggleTag(option)}
            >
              <span className="flex h-3.5 w-3.5 items-center justify-center mr-2 text-sm">
                {selectedTags.includes(option) && <Check className="h-4 w-4" />}
              </span>
              {option}
            </DropdownMenuPrimitive.Item>
          ))}
        </DropdownMenuPrimitive.Content>
      </DropdownMenuPrimitive.Portal>
    </DropdownMenuPrimitive.Root>
  );
};

export default TagMultiSelect;
