import { ReactNode, useState, CSSProperties, useEffect } from 'react';
import { ScrollRestoration } from 'react-router-dom';
import { PageConfig } from '@/routes/pageConfig';

interface AppInterface extends PageConfig {
  children: ReactNode;
}

const App = (props: AppInterface) => {
  const { children, allowHeader, allowFooter } = props;
  const [pageOffset, setPageOffset] = useState(0);
  const pageStyle: CSSProperties = {};

  useEffect(() => {
    let minHeightTimeout: ReturnType<typeof setTimeout>;
    const resizeListener = (): void => {
      clearTimeout(minHeightTimeout);
      minHeightTimeout = setTimeout(() => {
        try {
          const headerHeight =
            document.getElementsByTagName('header')[0].clientHeight;
          const footer = document.getElementsByTagName('footer')[0];
          const footerHeight =
            footer.clientHeight +
            parseFloat(window.getComputedStyle(footer).marginTop);
          setPageOffset(footerHeight + headerHeight);
        } catch (unused) {
          console.log('Undefined header or footer!');
        }
      }, 500);
    };
    resizeListener();
    window.addEventListener('resize', resizeListener);

    return () => {
      window.removeEventListener('resize', resizeListener);
    };
  }, []);

  if (allowFooter) {
    pageStyle.minHeight = `calc(100vh - ${pageOffset}px)`;
  }

  if (!allowHeader) {
    pageStyle.marginTop = 0;
  }

  return (
    <>
      {allowHeader && <></>}
      <main className="page-container" style={pageStyle}>
        {children}
      </main>
      {allowFooter && <></>}
      <ScrollRestoration />
    </>
  );
};

export default App;
