import Link from "next/link";

function Home() {
  return (
    <>
      <div className="grid grid-cols-4 gap-4 pt-36 px-8">
        <Link href={"/cadastro"}><div className=" grid grid-cols-1 gap-12 bg-gray-300 border-2 rounded-lg"><span>👳</span> <span>cadastro</span> </div></Link>
        <div className=" grid grid-cols-1 gap-12 bg-gray-300 border-2 rounded-lg"><span>👳</span> <span>cadastro</span> </div>
        <div className=" grid grid-cols-1 gap-12 bg-gray-300 border-2 rounded-lg"><span>👳</span> <span>cadastro</span> </div>
        <div className=" grid grid-cols-1 gap-12 bg-gray-300 border-2 rounded-lg"><span>👳</span> <span>cadastro</span> </div>
      </div>
    </>
  );
}

export default Home;
