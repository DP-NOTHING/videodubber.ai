import Image from "next/image";
import IndexNewHome from "./IndexNewHome";
import A2bText from "@/components/A2bText";
import A2bBreadcrumb from "@/components/A2bBreadcrumbs";
import A2bExtraLinks from "@/components/A2bExtraLinks";
import FAQA2b from "@/components/FAQA2b";
import A2b from "./A2b";

export default function Home() {
  return (
    <div>
      <A2b vord="audio" langcodes={["Spanish","English"]}/>
    {/* <A2bText vord="audio" langcodes={["Spanish","English"]}/>
    <A2bBreadcrumb vord="audio" langcodes={["Spanish","English"]}/>
    <A2bExtraLinks vord="audio" langcodes={["Spanish","English"]}  alllinks={[["dutch"],["guj"]]}/>
    <FAQA2b faqlist={[{"q":"How do I translate audio from Spanish to English?","a":"You can translate audio from Spanish to English by following these steps: 1. Go to the Translate page. 2. Select Spanish as the source language. 3. Select English as the target language. 4. Click on the 'Audio' tab. 5. Upload the audio file you want to translate. 6. Click on the 'Translate' button. 7. Wait for the translation to be completed. 8. Download the translated audio file."},{"q":"How do I translate audio from English to Spanish?","a":"You can translate audio from English to Spanish by following these steps: 1. Go to the Translate page. 2. Select English as the source language. 3. Select Spanish as the target language. 4. Click on the 'Audio' tab. 5. Upload the audio file you want to translate. 6. Click on the 'Translate' button. 7. Wait for the translation to be completed. 8. Download the translated audio file."}]} /> */}
    </div>
  );
}
