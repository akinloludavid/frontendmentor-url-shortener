import React, { ChangeEvent, useState } from "react";
import Button from "../../components/Button";
import Spinner from "../../components/Spinner";
import { useFetch } from "../../utils/customHooks";
import { baseUrl } from "../../utils/data";
import { copyToClipBoard, isValidUrl } from "../../utils/helpers";

const ShortenSection = () => {
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("Please add a link");
  const [url, setUrl] = useState("");
  const [clipboardId, setClipboardId] = useState("");
  const {
    mutate,
    isLoading,
    data: urlData,
    apiError,
  } = useFetch({
    apiBaseUrl: baseUrl,
    method: "POST",
    query: url,
  });

  const handleSetUrl = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setUrl(value);
    if (value) {
      setError(false);
    }
  };

  const handleUrlShortening = (e: any) => {
    e.preventDefault();
    if (url.length === 0) {
      setError(true);
      return;
    } else {
      if (!isValidUrl(url)) {
        setError(true);
        setErrorMessage("Invalid url");
      } else {
        setErrorMessage("");
        setError(false);
        mutate();
      }
    }
  };

  const handleCopy = (str: string, idx: number) => {
    copyToClipBoard(str).then(() => setClipboardId(String(idx)));
  };

  return (
    <>
      <div className="flex items-center flex-col md:flex-row -mt-[172px] p-8 md:p-12 md:px-20 justify-center gap-6 bg-dark-violet bg-[url('/src/assets/bg-shorten-desktop.svg')] rounded-xl">
        <form onSubmit={handleUrlShortening} className="w-[100%] relative ">
          <input
            value={url}
            onChange={handleSetUrl}
            type={"url"}
            placeholder="Shorten a link here..."
            className={`h-[60px] p-2 px-4 md:px-8 w-[100%] rounded-md outline-0 placeholder:font-medium placeholder:text-lg text-lg text-dark-violet focus:border-2 focus:border-cyan ${
              error
                ? "border-danger border-2 focus:border-2 focus:border-danger placeholder:text-danger text-danger"
                : ""
            }`}
          />
          {error && (
            <p className="absolute text-danger text-sm italic font-bold mt-1">
              {errorMessage}
            </p>
          )}
        </form>
        <button
          className="bg-cyan rounded-md text-white font-bold min-w-[180px] h-[60px] w-[100%] md:w-[180px] disabled:bg-gray mt-4 md:mt-[0px]"
          onClick={handleUrlShortening}
          disabled={isLoading}
        >
          {isLoading ? <Spinner /> : "Shorten It!"}
        </button>
      </div>
      <div className="mb-8" />
      {apiError && (
        <div className="px-4  md:px-8 py-4 rounded-lg bg-danger mt-4 text-white border-tomato border-2">
          <h3>{apiError}</h3>
        </div>
      )}
      {urlData?.map((link, idx) => (
        <div
          key={link.code}
          className="flex relative flex-col md:flex-row items-left md:items-center justify-between px-4  md:px-8 py-4 rounded-lg bg-white mt-4"
        >
          <p className="text-lg  mb-6 md:mb-[0] border-6">
            {link.original_link}
          </p>
          <div className="h-[2px] md:hidden absolute top-[60px] w-[100%] left-[-0px] -mt-[5px] mb-[5px] bg-light" />
          <div className="flex flex-col items-left md:flex-row md:items-center gap-4 ">
            <a
              href={link.full_short_link}
              target="_blank"
              rel="noopenner"
              className="text-cyan text-lg "
            >
              {link.full_short_link}
            </a>
            <Button
              className={`rounded-lg w-[100%] h-[48px] md:w-[120px] md:h-[40px] mb-2 md:mb-[0px] text-base ${
                clipboardId === String(idx) ? "bg-dark-violet" : ""
              }`}
              onClick={() => handleCopy(link.full_short_link, idx)}
            >
              {clipboardId === String(idx) ? "Copied!" : "Copy"}
            </Button>
          </div>
        </div>
      ))}
    </>
  );
};

export default ShortenSection;
