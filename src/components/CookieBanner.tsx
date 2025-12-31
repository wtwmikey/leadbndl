import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Cookie } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { getCookieConsent, saveCookieConsent, type CookieConsent } from "@/lib/cookies";

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    // Check if consent has been given
    const consent = getCookieConsent();
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const handleSaveConsent = (accepted: boolean, preferences?: CookieConsent["preferences"]) => {
    saveCookieConsent(accepted, preferences);
    setShowBanner(false);
    
    const consentData = getCookieConsent();
    // Here you can initialize analytics/tracking based on preferences
    if (consentData?.preferences?.analytics) {
      // Initialize analytics (Google Analytics, etc.)
      // Example: gtag('consent', 'update', { analytics_storage: 'granted' });
      console.log("Analytics cookies enabled");
    }
    if (consentData?.preferences?.marketing) {
      // Initialize marketing/tracking pixels
      // Example: fbq('consent', 'grant');
      console.log("Marketing cookies enabled");
    }
  };

  const handleAcceptAll = () => {
    handleSaveConsent(true);
  };

  const handleRejectAll = () => {
    handleSaveConsent(false, {
      necessary: true,
      analytics: false,
      marketing: false,
    });
  };

  const handleCustomize = () => {
    setShowDetails(true);
  };

  if (!showBanner) return null;

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-card border-t border-border shadow-lg"
        >
          <div className="container max-w-6xl mx-auto">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="flex items-start gap-3 flex-1">
                <Cookie className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground mb-1">
                    We Value Your Privacy
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. 
                    By clicking "Accept All", you consent to our use of cookies.{" "}
                    <a
                      href="#"
                      className="text-primary hover:underline"
                      onClick={(e) => {
                        e.preventDefault();
                        setShowDetails(true);
                      }}
                    >
                      Learn more
                    </a>
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-2 sm:flex-nowrap">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleRejectAll}
                  className="whitespace-nowrap"
                >
                  Reject All
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleCustomize}
                  className="whitespace-nowrap"
                >
                  Customize
                </Button>
                <Button
                  variant="default"
                  size="sm"
                  onClick={handleAcceptAll}
                  className="whitespace-nowrap"
                >
                  Accept All
                </Button>
              </div>
            </div>

            {showDetails && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="mt-4 pt-4 border-t border-border overflow-hidden"
              >
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <label className="font-medium text-foreground">Necessary Cookies</label>
                      <span className="text-xs text-muted-foreground px-2 py-1 bg-secondary rounded">
                        Always Active
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      These cookies are essential for the website to function properly. They cannot be disabled.
                    </p>
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <label className="font-medium text-foreground">Analytics Cookies</label>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">
                      These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.
                    </p>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        handleSaveConsent(true, {
                          necessary: true,
                          analytics: true,
                          marketing: false,
                        });
                      }}
                    >
                      Enable Analytics Only
                    </Button>
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <label className="font-medium text-foreground">Marketing Cookies</label>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">
                      These cookies are used to deliver personalized advertisements and track campaign effectiveness.
                    </p>
                  </div>
                  <div className="flex gap-2 pt-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={handleRejectAll}
                    >
                      Save Preferences
                    </Button>
                    <Button
                      variant="default"
                      size="sm"
                      onClick={handleAcceptAll}
                    >
                      Accept All
                    </Button>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieBanner;

