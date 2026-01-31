import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export const Breadcrumbs = ({ items }: BreadcrumbsProps) => {
  return (
    <nav aria-label="Breadcrumb" className="py-4">
      <ol className="flex items-center gap-2 text-sm">
        <li className="flex items-center">
          <a
            href="/"
            className="flex items-center gap-1 text-gray-600 hover:text-teal-700 transition-colors"
          >
            <Home className="w-4 h-4 flex-shrink-0" />
            <span className="whitespace-nowrap">Home</span>
          </a>
        </li>
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-2">
            <ChevronRight className="w-4 h-4 text-gray-400 flex-shrink-0" />
            {index === items.length - 1 ? (
              <span className="font-semibold text-gray-900 break-words">{item.name}</span>
            ) : (
              <a
                href={item.url}
                className="text-gray-600 hover:text-teal-700 transition-colors whitespace-nowrap"
              >
                {item.name}
              </a>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};
