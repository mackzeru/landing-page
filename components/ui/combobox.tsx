import { Check, ChevronsUpDown, Search } from "lucide-react";
import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";

interface ComboboxProps {
  options: { label: string; value: string }[];
  value: { label: string; value: string } | null;
  onValueChange: (value: { label: string; value: string }) => void;
  placeholder?: string;
  emptyMessage?: string;
  className?: string;
  triggerClassName?: string;
  contentClassName?: string;
  disabled?: boolean;
  searchPlaceholder?: string;
  searchQuery?: string;
  setSearchQuery?: (value: string) => void;
}

export function Combobox({
  options,
  value,
  onValueChange,
  placeholder = "Select an option",
  emptyMessage = "No results found.",
  className,
  triggerClassName,
  contentClassName,
  disabled = false,
  searchPlaceholder = "Search...",
  searchQuery: externalSearchQuery,
  setSearchQuery: externalSetSearchQuery,
}: ComboboxProps) {
  const [open, setOpen] = React.useState(false);
  const [internalSearchQuery, setInternalSearchQuery] = React.useState("");

  const searchQuery =
    externalSearchQuery !== undefined
      ? externalSearchQuery
      : internalSearchQuery;
  const setSearchQuery = externalSetSearchQuery || setInternalSearchQuery;

  // Filter options based on search query
  const filteredOptions = React.useMemo(() => {
    if (!searchQuery) return options;

    return options.filter((option) =>
      option.label.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [options, searchQuery]);
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className={cn("w-full justify-between", triggerClassName)}
          disabled={disabled}
        >
          {value
            ? value.label.length > 30
              ? value.label.slice(0, 30) + "...."
              : value.label
            : placeholder}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className={cn("p-0", contentClassName)}>
        <div
          className={cn(
            "flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground",
            className
          )}
        >
          {/* Search Input */}
          <div className="flex items-center border-b px-3">
            <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
            <input
              className="flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50"
              placeholder={searchPlaceholder}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* Empty State */}
          {filteredOptions.length === 0 && (
            <div className="py-6 text-center text-sm">{emptyMessage}</div>
          )}

          {/* Options List */}
          <div className="p-1 max-h-[200px] overflow-auto">
            {filteredOptions.map((option) => (
              <div
                key={option?.value || option.label}
                className={cn(
                  "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 hover:bg-accent hover:text-accent-foreground",
                  value?.value === option.value &&
                    "bg-accent text-accent-foreground"
                )}
                onClick={() => {
                  onValueChange(option);
                  setOpen(false);
                  setSearchQuery("");
                }}
              >
                {value?.value === option.value && (
                  <Check className={cn("mr-2 h-4 w-4")} />
                )}
                <span>{option.label}</span>
              </div>
            ))}
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
