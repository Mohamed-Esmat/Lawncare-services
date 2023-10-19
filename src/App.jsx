// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import {
  About,
  ContactUs,
  Footer,
  Header,
  Services,
  Testimonials,
} from './components';

function App() {
  const queryClient = new QueryClient();

  return (
    <>
      <Header />

      <main>
        <About />
        <Services />
        <QueryClientProvider  client={queryClient}>
          <Testimonials />
        </QueryClientProvider>
        <ContactUs />
      </main>

      <Footer />
    </>
  );
}

export default App;
