import {
  CheckCircle,
  CalendarBlank,
  ArrowCircleRight,
  ArrowCircleLeft,
} from "@phosphor-icons/react";
import { useState } from "react";
export default function Appointment() {
  const [retvalues, setretvalues] = useState({
    mode: "",
    dateslot: "",
    timeslot: "",
  });

  const appointments = {
    Inclinic: "45 Mins",
    Video: "45 Mins",
    Chat: "10 Mins",
  };
  const times = [
    {
      date: "Mon, 10 Oct",
      slotes: "10",
      easee: 1,
    },
    {
      date: "Tue, 11oct",
      slotes: "02",
      easee: 3,
    },
    {
      date: "Wed, 12 Oct",
      slotes: "05",
      easee: 2,
    },
  ];
  const clocks = [
    {
      slot: "Morning",
      clockstime: ["09:00 AM", "09:30 AM", "10:00 AM", "10:15 AM", "10:45 AM", "11:00 AM",],
    },
    {
      slot: "Evening",
      clockstime: ["04:00 PM", "04:15 PM", "04:30 PM", "04:45 PM", "05:15 PM"],
    },
  ];
  return (
    <section className="w-full  pt-6 px-3 border border-zinc-200 rounded-2xl interfont">
      <div className=" border border-zinc-200 rounded-xl pl-8 p-2 flex justify-between font-semibold text-lg">
        Appointment Fee
        <span className="text-accent1  mr-10">{`\u20B9`} 699.00 </span>
      </div>
      <div id="mode" className="">
        <span className="text-zinc-800  relative flex flex-row justify-stretch my-14 w-11/12">
          <div className=" h-[1px] w-full bg-zinc-200"></div>
          <div className="absolute left-0 -top-3 bg-white px-2 font-semibold ">
            Select your mode of session
          </div>
        </span>
        <div
          id="modebuttons"
          className="w-full flex gap-3 justify-center tracking-widest text-center"
        >
          <button
            onClick={() => {
              setretvalues({ ...retvalues, mode: "inclinic" });
            }}
            className={` ${
              retvalues.mode == "inclinic"
                ? "border-accent1 text-accent1 bg-accent1lt"
                : "border-zinc-300"
            } py-3 px-8 border  rounded-xl focus:border-accent1 focus:bg-accent1lt transition-all group poppins`}
          >
            <h1 className="flex items-center justify-center gap-2 font-medium group-focus:text-accent1">
              In Clinic
              <CheckCircle
                className={`"h-full group-focus:flex ${
                  retvalues.mode == "inclinic" ? "" : "hidden"
                }   text-accent1"`}
                weight="fill"
              />
            </h1>
            <h2 className="text-zinc-400 text-sm font-light">
              {appointments.Video}
            </h2>
          </button>

          <button
            onClick={() => {
              setretvalues({ ...retvalues, mode: "video" });
            }}
            className={` ${
              retvalues.mode == "video"
                ? "border-accent1 text-accent1 bg-accent1lt"
                : "border-zinc-300"
            } py-3 px-8 border  rounded-xl focus:border-accent1 focus:bg-accent1lt transition-all group poppins`}
          >
            <h1 className="flex items-center justify-center gap-2 font-medium group-focus:text-accent1">
              Video
              <CheckCircle
                className={`"h-full group-focus:flex ${
                  retvalues.mode == "video" ? "" : "hidden"
                }   text-accent1"`}
                weight="fill"
              />
            </h1>
            <h2 className="text-zinc-400 text-sm font-light">
              {appointments.Video}
            </h2>
          </button>
          <button
            onClick={() => {
              setretvalues({ ...retvalues, mode: "chat" });
            }}
            className={` ${
              retvalues.mode == "chat"
                ? "border-accent1 text-accent1 bg-accent1lt"
                : "border-zinc-300"
            } py-3 px-8 border  rounded-xl focus:border-accent1 focus:bg-accent1lt transition-all group poppins`}
          >
            <h1 className="flex items-center justify-center gap-2 font-medium group-focus:text-accent1">
              Chat
              <CheckCircle
                className={`"h-full group-focus:flex ${
                  retvalues.mode == "chat" ? "" : "hidden"
                }   text-accent1"`}
                weight="fill"
              />
            </h1>
            <h2 className="text-zinc-400 text-sm font-light">
              {appointments.Chat}
            </h2>
          </button>
        </div>
      </div>
      <div id="time" className="w-full ">
        <span className="text-zinc-800  relative flex flex-row justify-stretch my-14 w-11/12">
          <div className=" h-[1px] w-full bg-zinc-200"></div>
          <div className="absolute left-0 -top-3 bg-white px-2 font-semibold ">
            Pick a time slot
          </div>
          <div className="absolute right-0 -top-5 bg-white px-2 font-semibold border rounded-full p-2">
            <CalendarBlank
              className="cursor-pointer"
              onClick={() => {
                console.log("Calender");
              }}
              size={26}
            />
          </div>
        </span>
        <div className="flex w-full justify-between items-center border p-5 rounded-2xl nunito text-zinc-400">
          <ArrowCircleLeft size={32} />
          <div id="timecards" className="flex gap-4 ">
            {times.map((time, index) => {
              return (
                <button
                  key={index}
                  onClick={() => {
                    setretvalues({ ...retvalues, dateslot: time.date });
                  }}
                  className={`p-3 border rounded-xl text-center group ${retvalues.dateslot===time.date?" border-accent1 bg-accent1lt":"" }`}
                >
                  <h1
                    key={`${index}1`}
                    className={`${retvalues.dateslot===time.date?" text-accent1":"text-black"} font-semibold `}
                  >
                    {time.date}
                  </h1>
                  <h2
                    key={`${index}2`}
                    className={`font-bold ${
                      time.easee === 1
                        ? "text-zinc-400"
                        : time.easee === 2
                        ? "text-yellow-500"
                        : time.easee === 3
                        ? "text-red-600"
                        : ""
                    }`}
                  >
                    {time.slotes} slots
                  </h2>
                </button>
              );
            })}
          </div>
          <ArrowCircleRight size={32} />
        </div>
      </div>
      <div id="exacttime">
        {clocks.map((clock, index) => {
          return (
            <>
              <span
                key={index}
                className="text-zinc-800  relative flex flex-row justify-stretch mt-14 mb-10 w-11/12"
              >
                <div
                  key={`${index}a`}
                  className="absolute left-0 -top-3 bg-white px-2 font-semibold "
                >
                  {clock.slot}
                </div>
              </span>
              <div key={`${index}b`} className="flex flex-wrap gap-4 text-sm">
                {clock.clockstime.map((time, timeIndex) => (
                  <button
                    key={`${timeIndex}c`}
                    onClick={() => {
                      setretvalues({ ...retvalues, timeslot: time });
                    }}
                    className={`py-4 p-3 rounded-2xl border border-zinc-200 ${retvalues.timeslot===time?"bg-accent1 text-white":""} transition-all`}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </>
          );
        })}
      </div>
      <div className="pt-10 w-full">
        <button
          onClick={() => {
            console.log(retvalues);
            setretvalues({mode:"",dateslot:"",timeslot:""})
          }}
          className="w-full my-8 px-auto bg-accent1 text-white rounded-lg py-4"
        >
          Make An Appointment
        </button>
      </div>
    </section>
  );
}
