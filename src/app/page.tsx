import personDev from "@/images/person-dev.png";
import Image from "next/image";
import Link from "next/link";
import RootLayout from "./layout";
async function getProfile() {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
  const profile = await res.json();
  return {
    props: {
      profile,
    },
  };
}

export const metadata = {
  title: "Do Minh Vuong",
  description: 'Welcome to my portfolio'
}

export default async function Home() {
  const profile = await getProfile();
  console.log("profile", profile);
  return (
    <RootLayout>
      <main>
          <section className="flex justify-around my-8">
            <div className="flex-col space-y-6">
              <h2>
                Vuong Do is a{" "}
                <span className="text-pink-500">front-end developer</span>
              </h2>
              <p>
                He crafts responsive websites where technologies meet creativity
              </p>
              <button className="border-solid border-pink-500 border-2 px-4 py-2">
                <Link href="/contacts">Contact me!!</Link>
              </button>
            </div>
            <div className="flex-col space-y-6">
              <Image
                src={personDev}
                alt="person dev"
                height="386"
                width="468"
              />
              <div>
                <p>Currently working on Manabie - Edutech </p>
              </div>
            </div>
          </section>
        </main>
    </RootLayout>
  );
}
