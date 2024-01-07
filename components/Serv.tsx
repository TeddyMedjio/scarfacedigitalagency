import Link from "next/link";

type Props = {
  title: string;
  description: string;
  border?: boolean;
};

const Serv = ({ title, description, border }: Props) => {
  return (
    <div className="group transition-all duration-500 ease-in-out hover:bg-blu-60 cursor-pointer">
      <Link href="/services">
        <div className=" max-container padding-container ">
          <div
            className={`${
              border && `border-b-[1px]`
            } py-8 flex flex-col lg:flex-row lg:items-center`}
          >
            <h3 className=" semi-bold-29 md:semi-bold-47 text-gra-50 flex-1 mb-5 md:mb-0">
              {title}
            </h3>
            <p className="regular-18 text-gra-50 flex-1 lg:pr-20">
              {description}
            </p>
            <div className="hidden lg:block border-[1px] rounded-full p-5 transition-all duration-500 ease-in-out  group-hover:bg-green-50 ">
              <svg
                width="58"
                height="57"
                viewBox="0 0 58 57"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.5959 43.2112L45.0934 15.0442"
                  stroke="#AFFF00"
                  strokeWidth="5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="group-hover:stroke-blu-50 transition-all duration-500 ease-in-out"
                />
                <path
                  d="M43.9182 38.9052L46.0505 14.2395L21.3848 12.1071"
                  stroke="#AFFF00"
                  strokeWidth="5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="group-hover:stroke-blu-50 transition-all duration-500 ease-in-out"
                />
              </svg>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Serv;
