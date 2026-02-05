import { Link } from "react-router-dom";
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
        <nav className="flex overflow-x-auto no-scrollbar py-2" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2 flex-nowrap whitespace-nowrap">
            <li className="flex-shrink-0 flex items-center">
              <Link 
                to="/" 
                className="text-gray-400 hover:text-teal-600 transition-colors flex items-center gap-1"
                aria-label="Home"
              >
                <Home className="w-4 h-4 flex-shrink-0" />
                <span className="text-sm font-medium">Home</span>
              </Link>
            </li>
            
            {items.map((item, index) => (
              <li key={index} className="flex items-center flex-shrink-0">
                <ChevronRight className="w-4 h-4 text-gray-300 mx-1 flex-shrink-0" />
                {index === items.length - 1 ? (
                  <span className="text-sm font-medium text-teal-700 flex-shrink-0 flex items-center h-full">
                    {item.name}
                  </span>
                ) : (
                  <Link
                    to={item.url}
                    className="text-sm font-medium text-gray-500 hover:text-teal-600 transition-colors flex-shrink-0 flex items-center h-full"
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
          </ol>
        </nav>
      );
    };
