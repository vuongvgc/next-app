import Link from "next/link";
export const metadata = {
  title: "Work",
  description: "Welcome to my works",
};

export default function Works() {
  return (
    <div>
      <h1 className="text-center">My Works</h1>
      <p>Here is some my projects</p>
      <div className="flex justify-center space-x-2">
        <div>
          <div>
            <span className="mr-3">Name:</span>
            <span>
              <Link href={"/profile/works/projects/projectIds"}>Movie App</Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
