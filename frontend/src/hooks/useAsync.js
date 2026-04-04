/**
 * useAsync.js
 * 
 * Generic hook for any async operation
 * Handles loading, error, and success states
 */

import { useState, useEffect, useRef } from 'react';
import logger from '../../services/error/errorHandler.js';

/**
 * Generic async hook
 * @param {Function} asyncFunction - Function that returns a Promise
 * @param {Array} dependencies - Dependency array for useEffect
 * @param {Boolean} immediate - Whether to run immediately on mount
 */
export function useAsync(asyncFunction, dependencies = [], immediate = true) {
  const [state, setState] = useState({
    status: 'idle',
    data: null,
    error: null,
  });

  const executeRef = useRef(null);

  // Define the execute function
  useEffect(() => {
    executeRef.current = async () => {
      setState({ status: 'pending', data: null, error: null });

      try {
        const response = await asyncFunction();
        setState({ status: 'success', data: response, error: null });
        return response;
      } catch (error) {
        logger.error('Async operation failed', error);
        setState({ status: 'error', data: null, error });
        throw error;
      }
    };
  }, dependencies);

  // Execute on mount if immediate is true
  useEffect(() => {
    if (immediate && executeRef.current) {
      executeRef.current();
    }
  }, [immediate, dependencies]);

  // Return state and execute function
  return {
    ...state,
    execute: executeRef.current,
    isLoading: state.status === 'pending',
    isError: state.status === 'error',
    isSuccess: state.status === 'success',
  };
}

export default useAsync;
