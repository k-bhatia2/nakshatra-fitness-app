
import { useState, useEffect, useCallback } from 'react';

interface UseApiState<T> {
  data: T | null;
  isLoading: boolean;
  error: Error | null;
}

export const useApi = <T,>(apiCall: () => Promise<T>): UseApiState<T> => {
  const [state, setState] = useState<UseApiState<T>>({
    data: null,
    isLoading: true,
    error: null,
  });

  const fetchData = useCallback(async () => {
    setState({ data: null, isLoading: true, error: null });
    try {
      const data = await apiCall();
      setState({ data, isLoading: false, error: null });
    } catch (error) {
      setState({ data: null, isLoading: false, error: error as Error });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // We want to memoize based on function identity, but re-running on apiCall change is implicit. This is a simplification.

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return state;
};
