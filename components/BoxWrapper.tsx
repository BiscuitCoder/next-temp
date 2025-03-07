import { ReactNode } from 'react';

const BoxWrapper = ({ children,title='Function',url=''}:{children:ReactNode,title?:string,url?:string}) => {
  return (
    <div className="w-full p-4 border-small rounded-small border-default-200 dark:border-default-100">
        <div className='flex justify-between items-start'>
          <h1 className="text-lg font-bold mb-6">{title}</h1>
          {
            url && 
            <a href={url} target="_blank" rel="noopener noreferrer" className="text-xl text-primary hover:text-red-400">
              <i className="ri-share-box-line"></i>
            </a>
          }
        </div>
        <div>{children}</div>
    </div>
  )
};

export default BoxWrapper;