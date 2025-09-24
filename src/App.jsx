import Footer from './components/Footer';
import Navbar from './components/Navbar';

import IssuesManagement from './components/IssuesManagement';
import { Suspense } from 'react';
import Loading from './components/Loading';

const fetchIssues = async () => {
  const result = await fetch('/data.json');
  return result.json();
};

function App() {
  const fetchPromise = fetchIssues();
  return (
    <>
      <Navbar />

      <Suspense fallback={<Loading></Loading>}>
        <IssuesManagement fetchPromise={fetchPromise} />
      </Suspense>

      <Footer />
    </>
  );
}

export default App;
