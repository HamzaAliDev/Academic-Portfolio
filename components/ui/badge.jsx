import Image from "next/image";



const TechBadge = ({ name = null, imageSrc }) => {
  return (
    <div
      className={`${name ? 'px-2' : 'px-0.5 ps-2'} py-1 w-fit flex items-center gap-2 text-xs font-medium border  ${name ? 'rounded-full' : 'rounded-lg'}  shadow-x bg-[#ec4899]-500/10`}>
      <Image
        src={imageSrc} // Ensure you have icons named accordingly
        width={12}
        height={12}
        alt={`${name} Icon`}
        className={name ? 'w-3 h-3' : 'w-[19px] h-[19px]'} />
      <span>{name}</span>
    </div>
  );
};

export default TechBadge;

