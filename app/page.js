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
      {/* <IndexNewHome /> */}
    </div>
  );
}
