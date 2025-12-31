/**
 * Utility functions for managing cookie consent
 */

export const COOKIE_CONSENT_KEY = "leadbndl_cookie_consent";
export const COOKIE_EXPIRY_DAYS = 365;

export interface CookieConsent {
  accepted: boolean;
  timestamp: number;
  preferences?: {
    necessary: boolean;
    analytics: boolean;
    marketing: boolean;
  };
}

/**
 * Get the current cookie consent status
 * @returns CookieConsent object if consent exists, null otherwise
 */
export const getCookieConsent = (): CookieConsent | null => {
  if (typeof window === "undefined") return null;

  try {
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!consent) return null;

    const consentData: CookieConsent = JSON.parse(consent);
    const expiryDate = consentData.timestamp + COOKIE_EXPIRY_DAYS * 24 * 60 * 60 * 1000;
    
    // Check if consent has expired
    if (Date.now() > expiryDate) {
      localStorage.removeItem(COOKIE_CONSENT_KEY);
      return null;
    }

    return consentData;
  } catch (error) {
    console.error("Error reading cookie consent:", error);
    return null;
  }
};

/**
 * Check if user has given consent for analytics cookies
 * @returns boolean
 */
export const hasAnalyticsConsent = (): boolean => {
  const consent = getCookieConsent();
  return consent?.preferences?.analytics ?? false;
};

/**
 * Check if user has given consent for marketing cookies
 * @returns boolean
 */
export const hasMarketingConsent = (): boolean => {
  const consent = getCookieConsent();
  return consent?.preferences?.marketing ?? false;
};

/**
 * Check if user has given any consent
 * @returns boolean
 */
export const hasAnyConsent = (): boolean => {
  const consent = getCookieConsent();
  return consent?.accepted ?? false;
};

/**
 * Save cookie consent preferences
 * @param accepted - Whether user accepted cookies
 * @param preferences - Specific cookie preferences
 */
export const saveCookieConsent = (
  accepted: boolean,
  preferences?: CookieConsent["preferences"]
): void => {
  if (typeof window === "undefined") return;

  const consentData: CookieConsent = {
    accepted,
    timestamp: Date.now(),
    preferences: preferences || {
      necessary: true,
      analytics: accepted,
      marketing: accepted,
    },
  };

  localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(consentData));
};

