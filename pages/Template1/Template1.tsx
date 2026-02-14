import Ceremony from "@/component/template1/Ceremony";
import DateDay from "@/component/template1/DateDay";
import JumbotronTemplate1 from "@/component/template1/Jumbotron";
import PengantinTemplate1 from "@/component/template1/Pengantin";
import "@/styles/template1.css";

async function Template1() {
  return (
    <div>
      <JumbotronTemplate1/>
      <PengantinTemplate1/>
      <DateDay/>
      <Ceremony/>
    </div>
  );
}

export default Template1;
