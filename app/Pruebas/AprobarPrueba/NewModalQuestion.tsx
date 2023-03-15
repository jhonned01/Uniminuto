import React from "react";

type Props = {
  ShowModal: {
    Show: boolean;
    Questions: any[];
  };
  setShowModal: any;
};

const NewModalQuestion = ({ ShowModal, setShowModal }: Props) => {
  return (
    <div className="bg-[#000236]/60 transition duration-150 ease-in-out z-10 fixed top-0 right-0 bottom-0 left-0">
      <div className="container mx-auto  w-11/12 md:w-2/3 max-w-3xl  ">
        <div className="relative overflow-auto  max-h-screen   py-8 px-5 md:px-10 bg-white shadow-md rounded border border-gray-400">
          <h1 className="text-center text-lg tracking-normal leading-tight mb-4 bg-[#151A8B] w-full text-white p-4 rounded-lg font-bold ">
            hola
          </h1>

          <div className="flex gap-3">
            {ShowModal?.Questions?.map((question, key) => (
              <div
                key={key}
                className="w-full h-64 flex flex-col justify-between items-start bg-blue-300 rounded-lg border border-blue-300 mb-6 py-5 px-4"
              >
                <div>
                  <h4 className="text-gray-800 font-bold mb-3">
                    13 things to work on
                  </h4>
                  <p className="text-gray-800 text-sm ">
                    Probabo, inquit, sic agam, ut labore et voluptatem sequi
                    nesciunt, neque porro quisquam est, quid malum, sensu
                    iudicari
                  </p>
                </div>
                <div className="w-full flex flex-col items-start">
                  <div
                    className="mb-3 border border-gray-800 rounded-full px-3 py-1 text-gray-800 text-xs flex items-center"
                    aria-label="Due on"
                    role="contentinfo"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-alarm"
                      width={16}
                      height={16}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <circle cx={12} cy={13} r={7} />
                      <polyline points="12 10 12 13 14 13" />
                      <line x1={7} y1={4} x2="4.25" y2={6} />
                      <line x1={17} y1={4} x2="19.75" y2={6} />
                    </svg>
                    <p className="ml-2">7 Sept, 23:00</p>
                  </div>
                  <div className="flex items-center justify-between text-gray-800 w-full">
                    <p className="text-sm">March 28, 2020</p>
                    <button
                      className="w-8 h-8 rounded-full bg-gray-800 text-white flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 ring-offset-blue-300  focus:ring-black"
                      aria-label="edit note"
                      role="button"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-pencil"
                        width={20}
                        height={20}
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <path d="M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4" />
                        <line x1="13.5" y1="6.5" x2="17.5" y2="10.5" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-around mt-3 gap-2">
            <button className="block w-full max-w-xs mx-auto bg-[#151a8b] hover:bg-blue-700 focus:bg-blue-700 text-white rounded-lg px-3 py-3 font-semibold">
              Aceptar
            </button>
            <button
              onClick={() => {
                setShowModal({
                  Show: false,
                  Questions: [],
                });
              }}
              className="block w-full max-w-xs mx-auto bg-[#151a8b] hover:bg-blue-700 focus:bg-blue-700 text-white rounded-lg px-3 py-3 font-semibold"
            >
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewModalQuestion;
