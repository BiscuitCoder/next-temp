import { ReactNode } from 'react';

const dynamicLayout = ({children}:{children:ReactNode}) => {
  return <div>{children}</div>;
};

export default dynamicLayout;