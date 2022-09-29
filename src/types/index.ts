import { ReactNode } from "react";

export interface IChildren {
  children: ReactNode;
}
export interface IFooterColumnProps {
  header: string;
  lists: { label: string }[];
}

export interface ICardProps {
  title: string;
  details: string;
  img: any;
}

export interface IFetchProps {
  query: string;
  method: "POST" | "GET";
  apiBaseUrl?: string;
}
export interface IApiData {
  code: string;
  full_share_link: string;
  full_short_link: string;
  full_short_link2: string;
  full_short_link3: string;
  original_link: string;
  share_link: string;
  short_link: string;
  short_link2: string;
  short_link3: string;
}
