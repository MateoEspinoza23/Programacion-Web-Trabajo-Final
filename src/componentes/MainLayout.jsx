import './MainLayout.css';

const MainLayout = ({ children }) => {
  return (
    <main className="layout-main">
      {children}
    </main>
  );
};

export default MainLayout;