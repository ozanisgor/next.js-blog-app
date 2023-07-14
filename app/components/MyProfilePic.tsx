import Image from "next/image";

export default function MyProfilePic() {
  return (
    <section className="w-full mx-auto">
      <Image
        src="/images/450x450_transparent_b&w_rotated_2nd_edited.png"
        width={200}
        height={200}
        alt="Ozan Isgor"
        priority={true}
        className="border-4 border-black dark:border-slate-500 drop-shadow-xl shadow-black rounded-full mx-auto mt-8"
      />
      ;
    </section>
  );
}
