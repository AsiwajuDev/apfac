import Link from "next/link";

const Frame = ({ media, name, mediaTitle, className, mediaUrl }) => {
  return (
    <div className="">
      <div className=" w-48 lg:w-40">
        <div className="">
          <div className="box bg-gray-500">
            <Link href={`/${mediaUrl}`}>
              <a>
                <img className={className} src={media} alt={name} />
              </a>
            </Link>
          </div>
          <div className="mx-2">
            <Link href={`/${mediaUrl}`}>
              <a className="text-green-400 leading-5 font-bold">{mediaTitle}</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frame;
