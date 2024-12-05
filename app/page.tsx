import Image from "next/image";
import MainBox from "./ui/main-box";
import MessageBox from "./ui/message-box";

export default function Home() {
  return (
    <div className="flex">
      <main className="flex container mx-auto h-screen px-4">
        <div className="flex w-full h-full place-content-center">
          <MainBox></MainBox>
        </div>
      </main>
      <footer className="">
      </footer>
    </div>
  );
}
