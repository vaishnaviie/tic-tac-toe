import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div>
        <h1 className="font-bold text-center text-[2rem]  ">Tic Tac Toe</h1>
      </div>
      <div className=" w-[25rem] m-[auto] mt-[5rem] grid grid-cols-3 gap-[2rem]  ">
        {[...Array(9)].map((item, index) => (
          <div className="bg-[red] w-[100px] h-[100px] " key={index}>
            {index}
          </div>
        ))}
      </div>
    </div>
  );
}
