import { useEffect, useState } from "react";
import axios, { AxiosError, AxiosResponse } from "axios";
import { IApiData, IFetchProps } from "../../types";

export const useFetch = ({ apiBaseUrl, method, query }: IFetchProps) => {
  // https://api.shrtco.de/v2/shorten?url=example.org/very/long/link.html
  const [data, setData] = useState<IApiData[]>([]);
  const [apiError, setApiError] = useState<any>();
  const [isLoading, setIsLoading] = useState(false);
  const mutate = () => {
    setIsLoading(true);
    axios
      .request({
        baseURL: `${apiBaseUrl}?url=${query}`,
        method,
      })
      .then((res: AxiosResponse) => {
        setData((prev: any) => [...prev, res.data?.result]);
        setApiError("");
      })
      .catch((err: AxiosError) => setApiError(err.message))
      .finally(() => setIsLoading(false));
  };

  return { mutate, data, isLoading, apiError };
};
