import { useCallback } from 'react';
import { triggerHaptic, type HapticType, isVibrationSupported } from '@/lib/haptics';

/**
 * Hook for haptic feedback
 * Returns a function to trigger haptic feedback
 * 
 * @example
 * const haptic = useHaptic();
 * 
 * const handleClick = () => {
 *   haptic('medium');
 *   // ... rest of click handler
 * };
 */
export function useHaptic() {
  const haptic = useCallback((type: HapticType = 'medium') => {
    // Only trigger if vibration is supported
    if (isVibrationSupported()) {
      triggerHaptic(type);
    }
  }, []);

  return haptic;
}

