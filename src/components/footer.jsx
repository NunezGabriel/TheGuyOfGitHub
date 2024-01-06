import Link from "next/link";

const FooterComponent = () => {
  return (
    <div className="mt-10 w-full h-24 p-4   flex items-center justify-center">
      <Link href={"/"} className="text-gray-600 text-center text-sm">
        Application developed with passion ❤ by me, Gabriel N.A. Click this to
        see my info
      </Link>
    </div>
  );
};

export default FooterComponent;
