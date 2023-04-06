import Link from "next/link";
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
  description: "Welcome to my portfolio",
};

export default async function Home() {
  const profile = await getProfile();
  console.log("profile", profile);
  return (
    <main>
      <section className="flex justify-around my-8">
        <div>
          <Link href={"/profile"}>Profile</Link>
        </div>
        <div>
          <Link href={"/admin"}>admin</Link>
        </div>
      </section>
    </main>
  );
}
