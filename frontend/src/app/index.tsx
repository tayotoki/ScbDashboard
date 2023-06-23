import { Outlet } from 'react-router-dom';

import { withTheme } from './providers/ThemeProvider/hoc/withTheme';

import { MainLayout } from '@/shared/layouts';
import { useTheme } from '@/shared/lib/hooks/useTheme';
import { Sidebar } from '@/widgets/Sidebar';

import './styles/index.scss';

const App = () => {
  const { theme } = useTheme();
  return (
    <div id='app' className={theme}>
      <MainLayout content={<Outlet />} header={<p>header</p>} sidebar={<Sidebar />} toolbar={<p>toolbar</p>} />
    </div>
  );
};

export default withTheme(App);
