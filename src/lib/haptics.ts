/**
 * Haptic feedback utility for iOS devices
 * Uses the Vibration API which is supported on iOS Safari
 */

export type HapticType = 
  | 'light'      // Light tap (10ms)
  | 'medium'     // Medium tap (20ms)
  | 'heavy'      // Heavy tap (30ms)
  | 'success'    // Success pattern (short-long-short)
  | 'warning'    // Warning pattern (medium-medium)
  | 'error'      // Error pattern (long-short-long)
  | 'selection'; // Selection change (5ms)

/**
 * Detects if the device is iOS
 */
export function isIOS(): boolean {
  if (typeof window === 'undefined') return false;
  
  return /iPad|iPhone|iPod/.test(navigator.userAgent) ||
    (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
}

/**
 * Checks if the Vibration API is available
 */
export function isVibrationSupported(): boolean {
  if (typeof window === 'undefined') return false;
  return 'vibrate' in navigator;
}

/**
 * Triggers haptic feedback based on type
 * @param type - The type of haptic feedback to trigger
 */
export function triggerHaptic(type: HapticType = 'medium'): void {
  if (typeof window === 'undefined') return;
  
  // Only trigger on iOS devices or devices that support vibration
  if (!isVibrationSupported()) return;
  
  // Different vibration patterns for different feedback types
  const patterns: Record<HapticType, number | number[]> = {
    light: 10,
    medium: 20,
    heavy: 30,
    success: [10, 50, 20],
    warning: [20, 50, 20],
    error: [30, 50, 20, 50, 30],
    selection: 5,
  };
  
  try {
    navigator.vibrate(patterns[type]);
  } catch (error) {
    // Silently fail if vibration is not supported or blocked
    console.debug('Haptic feedback not available:', error);
  }
}

