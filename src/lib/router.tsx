import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface RouterContextType {
  currentPath: string;
  navigate: (path: string) => void;
  params: Record<string, string>;
}

const RouterContext = createContext<RouterContextType>({
  currentPath: '/',
  navigate: () => {},
  params: {},
});

export const useRouter = () => useContext(RouterContext);

export function Router({ children }: { children: ReactNode }) {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (path: string) => {
    window.history.pushState({}, '', path);
    setCurrentPath(path);
    window.scrollTo(0, 0);
  };

  // Extract params from path
  const getParams = () => {
    const params: Record<string, string> = {};
    return params;
  };

  return (
    <RouterContext.Provider value={{ currentPath, navigate, params: getParams() }}>
      {children}
    </RouterContext.Provider>
  );
}

interface RouteProps {
  path: string;
  element: ReactNode;
}

export function Route({ path, element }: RouteProps) {
  const { currentPath } = useRouter();

  // Handle dynamic routes with :param
  const pathPattern = path.replace(/:\w+/g, '([^/]+)');
  const regex = new RegExp(`^${pathPattern}$`);
  const match = currentPath.match(regex);

  if (match) {
    return <>{element}</>;
  }

  return null;
}

export function Routes({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
