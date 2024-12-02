import Image from "next/image";
import Navbar from "./Components/Navbar";
import TeachersList from "./Components/TeachersList";
import TeachersBoxes from "./Components/TeachersBoxes";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <TeachersList/>
      <TeachersBoxes/>
    </div>
  );
}
