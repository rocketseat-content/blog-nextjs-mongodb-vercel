import useSWR from "swr";

export function useFetch(url: string, revalidateOnFocus: boolean = false) {
  const { data, error } = useSWR(url, async (url) => {
    const response = await fetch(url);
    const data = await response.json();

    return data;
  }, {revalidateOnFocus });

  return { data, error };
}