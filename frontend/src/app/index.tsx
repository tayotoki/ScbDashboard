import { withTheme } from './providers/ThemeProvider/hoc/withTheme';

import { MainLayout } from '@/shared/layouts';
import { useTheme } from '@/shared/lib/hooks/useTheme';

import './styles/index.scss';

const App = () => {
  const { theme } = useTheme();
  return (
    <div id='app' className={theme}>
      <MainLayout content={<div>gdfg</div>} header={<p>header</p>} sidebar={<p>sidebar</p>} toolbar={<p>toolbar</p>} />
    </div>
  );
};

export default withTheme(App);
