import { CalenderIcon, ClockIcon } from "../assets/images/icons"

const DateAndTimePicker = () => {
  return (
  
    <div className="border divide-x divide-[#828282] w-full py-3 rounded flex items-center  px-6 border-[#828282] ">
    <div className="flex gap-2 items-center pr-6">
      <img src={CalenderIcon} alt='icon' />
      <p className="capitalize text-base">departure date</p>
    </div>
    <div className="flex gap-2 items-center pl-6">
      <img src={ClockIcon} alt='icon' />
      <p className=" text-base">12:00 pm</p>
    </div>
  </div>
  )
}

export default DateAndTimePicker