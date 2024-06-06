import React from "react";
import Link from "next/link";

const A2bBox = ({ vord, langcodes ,flags,data }) => {
 
  const flagdict = {
    italian: "it",
    japanese: "jp",
    english: "us",
    french: "fr",
    spanish: "es",
    german: "de",
    mandarin: "cn",
  };
  const capitalize = (string) =>
    string.charAt(0).toUpperCase() + string.slice(1); 

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <div className="p-8 rounded-lg border-2 m-8 shadow-md">
        <h2 className="text-lg sm:text-2xl font-bold text-black-500 mb-4">
          {data.heading}
        </h2>
        <ol className="list-decimal list-inside space-y-4">
          {data.steps.map((step, index) => (
            <li key={index} className="text-lg flex">
              <div>
                <h3 className="text-base sm:text-xl font-bold text-black mb-2">
                  {index + 1}. {step.title}
                </h3>
                <p className="text-black text-sm sm:text-base">
                  {step.description}
                </p>
              </div>
            </li>
          ))}

          {/* <li className="text-lg ">
            <h3 className="text-base sm:text-xl font-bold text-black mb-2">1. Upload Your {capitalize(vord)}</h3>
            <p className="text-black text-sm sm:text-base">
              Utilize our uploader to import your {vord} from various sources like your laptop, Google Drive, YouTube, or Dropbox. Enjoy the first 1 minute free with no file limits.
            </p>
          </li>
          <li className="text-lg ">
            <h3 className="text-base sm:text-xl font-bold text-black mb-2">2. Select Source Language {langcodes[0] && `"${langcodes[0]}"`}</h3>
            <p className="text-black text-sm sm:text-base">
              We currently support translations from English, Spanish, French, German, Mandarin, Dutch, Portuguese, Russian, Italian, Japanese, and many other languages. Don't forget to select the gender, source and target languages.
            </p>
          </li>
          <li className="text-lg ">
            <h3 className="text-base sm:text-xl font-bold text-black mb-2">3. Modify "Transcription" or "Subtitles"</h3>
            <p className="text-black text-sm sm:text-base">
              You can modify your {vord} translation by modifying the generated "Subtitles" for later {vord} integration or even upload your own subtitles. This helps us by adopting your vocabulary and correcting AI-generated translation to the highest accuracy.
            </p>
          </li>
          <li className="text-lg ">
            <h3 className="text-base sm:text-xl font-bold text-black mb-2">4. Choose Target Language {langcodes[1] && `"${langcodes[1]}"`}</h3>
            <p className="text-black text-sm sm:text-base">
              With our intuitive UI, you can select any number of languages to translate to at one go! You don't have to wait for one translation to finish and upload the {vord} again, choose the settings again. Choosing the target language is as simple as ticking a box!
            </p>
          </li>
          <li className="text-lg ">
            <h3 className="text-base sm:text-xl font-bold text-black mb-2">5. Choose Instant Voice Cloning - "Original Voice" or "Custom Voice"</h3>
            <p className="text-black text-sm sm:text-base">
              The creator's natural voice adds a genuine touch to the content, enhancing credibility. Voice Cloning is now essential for content creators and VideoDubber users can use instant voice cloning either in their original voice or new custom voices in minutes, not weeks.
            </p>
          </li>
          <li className="text-lg ">
            <h3 className="text-base sm:text-xl font-bold text-black mb-2">6. Modify the Translated Subtitles (Optional)</h3>
            <p className="text-black text-sm sm:text-base">
              Our automatic transcription software swiftly converts your {vord} to text and translates the subtitles/transcripts {langcodes[0] && `from ${langcodes[0]}`} {langcodes[1] && `to ${langcodes[1]}`}. You may choose to check the translated subtitles for accuracy if you want. There is little need though as our subtitles translator is state-of-the-art and translates subtitles {langcodes[0] && `from ${langcodes[0]}`} {langcodes[1] && `to ${langcodes[1]}`} efficiently with 97% accuracy.
            </p>
          </li>
          <li className="text-lg ">
            <h3 className="text-base sm:text-xl font-bold text-black mb-2">7. Watch your "Translated {vord}"{langcodes[1] && ` in "${langcodes[1]}"`}</h3>
            <p className="text-black text-sm sm:text-base">
              Our {vord} translator promptly generates the {langcodes[1] && langcodes[1]} translation of your {vord}.
            </p>
          </li>
          <li className="text-lg ">
            <h3 className="text-base sm:text-xl font-bold text-black mb-2">8. Click "Export" and Choose Your Preferred File Format</h3>
            <p className="text-black text-sm sm:text-base">
              Translate a {langcodes[0] && langcodes[0]} {vord} {langcodes[1] && `to ${langcodes[1]}`} effortlessly by clicking "Submit" and voila, your translated {vord} will be ready in minutes keeping emotions and tonality as preserved as possible using AI. Now, you can download the {vord} or associated subtitles or translated subtitles directly by clicking the "download" buttons on the results page.
            </p>
          </li> */}
        </ol>
      </div>
      <div className="p-8">
        <div>
          {langcodes[0] ? (
            <div className="text-lg sm:text-xl text-center">
              Want to{" "}
              <Link
                href={`/translate-${langcodes[0].toLowerCase()}-${vord}`}
                className="text-indigo-800"
              >
                <b>
                  Translate {langcodes[0]}{" "}
                  {vord === "subtitles"
                    ? capitalize(vord)
                    : capitalize(vord) + "s"}
                </b>
              </Link>{" "}
              to other languages instead?
            </div>
          ) : langcodes[1] ? (
            <div className="text-lg sm:text-xl text-center">
              Want to{" "}
              <Link
                href={`/translate-${vord}-to-${langcodes[1].toLowerCase()}`}
                className="text-indigo-800"
              >
                <b>
                  Translate{" "}
                  {vord === "subtitles"
                    ? capitalize(vord)
                    : capitalize(vord) + "s"}
                </b>
              </Link>{" "}
              to {langcodes[1]} instead?
            </div>
          ) : (
            <div className="text-lg sm:text-xl text-center">
              Want to{" "}
              <Link
                href={`/translate-${vord}-to-english`}
                className="text-indigo-800"
              >
                <b>
                  Translate{" "}
                  {vord === "subtitles"
                    ? capitalize(vord)
                    : capitalize(vord) + "s"}
                </b>
              </Link>{" "}
              to English instead?
            </div>
          )}

          <div className="grid grid-cols-12 gap-5 p-8 text-center">
            {flags.map(
              (flag) =>
                flag !== langcodes[0]?.toLowerCase() &&
                flag !== langcodes[1]?.toLowerCase() &&
                (flag !== "english" || langcodes[0] + langcodes[1] !== "") && (
                  <Link
                    key={flag}
                    href={
                      langcodes[0]
                        ? `/translate-${langcodes[0].toLowerCase()}-${vord}-to-${flag}/`
                        : langcodes[1]
                        ? `/translate-${flag}-${vord}-to-${langcodes[1].toLowerCase()}/`
                        : `/translate-${flag}-${vord}-to-english/`
                    }
                    className="col-span-6 flex flex-col gap-1 rounded-xl border-2 border-gray-600/30 py-2 px-1 sm:col-span-4 md:col-span-3"
                  >
                    <div className="capitalize text-sm sm:text-base">
                      {flag}
                    </div>
                    <div className="relative">
                      <span
                        style={{
                          boxSizing: "border-box",
                          display: "inline-block",
                          overflow: "hidden",
                          width: "initial",
                          height: "initial",
                          background: "none",
                          opacity: 1,
                          border: 0,
                          margin: 0,
                          padding: 0,
                          position: "relative",
                          maxWidth: "100%",
                        }}
                      >
                        <span
                          style={{
                            boxSizing: "border-box",
                            display: "block",
                            width: "initial",
                            height: "initial",
                            background: "none",
                            opacity: 1,
                            border: 0,
                            margin: 0,
                            padding: 0,
                            maxWidth: "100%",
                          }}
                        >
                          <img
                            style={{
                              display: "block",
                              maxWidth: "100%",
                              width: "initial",
                              height: "initial",
                              background: "none",
                              opacity: 1,
                              border: 0,
                              margin: 0,
                              padding: 0,
                            }}
                            alt=""
                            aria-hidden="true"
                            src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2750%27%20height=%2733%27/%3e"
                          />
                        </span>

                        <img
                          alt={`Image of ${flag} flag`}
                          src={`https://flagcdn.com/h120/${flagdict[flag]}.png`}
                          decoding="async"
                          className="h-full w-full rounded-md object-cover"
                          style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            bottom: 0,
                            right: 0,
                            boxSizing: "border-box",
                            padding: 0,
                            border: "none",
                            margin: "auto",
                            display: "block",
                            width: 0,
                            height: 0,
                            minWidth: "100%",
                            maxWidth: "100%",
                            minHeight: "100%",
                            maxHeight: "100%",
                          }}
                        />
                      </span>
                    </div>
                  </Link>
                )
            )}
          </div>
        </div>
      </div>
      <style jsx>{`
        li,
        ol,
        ul {
          list-style-type: none;
        }
      `}</style>
    </div>
  );
};

export default A2bBox;
