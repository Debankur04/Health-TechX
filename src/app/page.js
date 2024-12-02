import Image from "next/image";
import Navbar from "./Components/Navbar";
import DoctorsList from "./Components/DoctorsList";
import DoctorBoxes from "./Components/DoctorBoxes";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <DoctorsList/>
      <DoctorBoxes/>
    </div>
  );
}
