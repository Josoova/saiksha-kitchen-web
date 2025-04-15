
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import { useEffect } from "react";

// Custom component to handle product tab navigation
const ProductsWithTabHandler = () => {
  // Get tab from URL and set it in the component
  const urlParams = new URLSearchParams(window.location.search);
  const tab = urlParams.get('tab');
  
  useEffect(() => {
    // If there's a tab parameter, we'll use it to select the right tab when the component mounts
    if (tab === 'kettles') {
      setTimeout(() => {
        // Use setTimeout to ensure the DOM is ready
        const kettlesTab = document.querySelector('[value="kettles"]') as HTMLElement;
        if (kettlesTab) kettlesTab.click();
      }, 100);
    }
  }, [tab]);
  
  return <Products />;
};

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout><Home /></Layout>} />
          <Route path="/about" element={<Layout><About /></Layout>} />
          <Route path="/products" element={<Layout><ProductsWithTabHandler /></Layout>} />
          <Route path="/products/:category/:productId" element={<Layout><ProductDetail /></Layout>} />
          <Route path="/contact" element={<Layout><Contact /></Layout>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
