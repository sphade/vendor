import { Button, NotificationProfileHeader } from "../../../components";
import aircraftPicture from "../../../assets/images/plane-4.png";
import insidePlane from "../../../assets/images/plane-3.png";
import { ArrowLeftIcon, EditIcon } from "../../../assets/images/icons";
const AircraftDetails = () => {
  return (
    <div>
      <header className="header !mb-5">
        <div className="space-x-3 flex items-center">
          <img
            src={ArrowLeftIcon}
            alt={ArrowLeftIcon}
            className="cursor-pointer border-primary border-2 rounded-full "
          />
          <h1 className="header-heading">sky Night</h1>
        </div>
        <div className="flex items-center gap-24">
          <div className="flex items-center">
            <img src={EditIcon} alt={EditIcon} />
            <p className="uppercase text-tertiary font-bold">Edit</p>
          </div>

          <NotificationProfileHeader />
        </div>
      </header>
      <main>
        <div className="rounded-lg  p-6 w-[522px] mx-auto border mb-3 border-[#BDBDBD]">
          <img
            src={aircraftPicture}
            alt={aircraftPicture}
            className="h-[230px] w-full object-contain "
          />
          <div className="divide-y divide-[#BDBDBD] text-sm">
            <div className="py-4 flex items-center justify-between">
              <p className="capitalize text-[#828282]">aircraft Name: </p>
              <p className="capitalize text-tertiary">night sky 6000</p>
            </div>{" "}
            <div className="py-4 flex items-center justify-between">
              <p className="capitalize text-[#828282]">Service typr: </p>
              <p className="capitalize text-tertiary">night sky 6000</p>
            </div>{" "}
            <div className="py-4 flex items-center justify-between">
              <p className="capitalize text-[#828282]">aircraft type: </p>
              <p className="capitalize text-tertiary">night sky 6000</p>
            </div>{" "}
            <div className="py-4 flex items-center justify-between">
              <p className="capitalize text-[#828282]">seat capacity: </p>
              <p className="capitalize text-tertiary">night sky 6000</p>
            </div>{" "}
            <div className="py-4 flex items-center justify-between ">
              <p className="capitalize text-[#828282]">total amount: </p>
              <p className="capitalize text-tertiary">night sky 6000</p>
            </div>{" "}
            <div className="py-4 flex flex-col gap-3 ">
              <p className="capitalize text-[#828282]">description: </p>
              <p className="capitalize text-tertiary font-semibold">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum
                vitae laboriosam voluptatem. Perferendis consectetur
                exercitationem, provident odio distinctio unde minus quaerat
                voluptatum nemo accusamus earum iste modi maxime, nulla nobis.
              </p>
            </div>
            <div className="py-4 flex flex-col gap-3 ">
              <p className="capitalize text-[#828282]">photos: </p>
              <div className=" flex justify-between items-center">
                <img src={insidePlane} alt={insidePlane} />
                <img src={insidePlane} alt={insidePlane} />
                <img src={insidePlane} alt={insidePlane} />
                <img src={insidePlane} alt={insidePlane} />
              </div>
            </div>
            <div className="py-4 flex flex-col gap-3 ">
              <p className="capitalize text-tertiary text-lg font-semibold mb-3">
                specifications{" "}
              </p>
              <div className="flex justify-between">
                <div>
                  <h3 className="capitalize text-tertiary font-semibold mb-5">
                    performance
                  </h3>
                  <div className="space-y-2">
                    <div className=" flex items-center gap-3 ">
                      <p className="capitalize text-[#828282]">travel hour: </p>
                      <p className="capitalize text-tertiary font-semibold">
                        358 hrs
                      </p>
                    </div>
                    <div className=" flex items-center gap-3 ">
                      <p className="capitalize text-[#828282]">max speed: </p>
                      <p className="capitalize text-tertiary font-semibold">
                        358 hrs
                      </p>
                    </div>
                    <div className=" flex items-center gap-3 ">
                      <p className="capitalize text-[#828282]">
                        max distance:{" "}
                      </p>
                      <p className="capitalize text-tertiary font-semibold">
                        358 hrs
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="capitalize text-tertiary font-semibold mb-5">
                    interior
                  </h3>
                  <div className="space-y-2">
                    <div className=" flex items-center gap-3 ">
                      <p className="capitalize text-[#828282]">bar: </p>
                      <p className="capitalize text-tertiary font-semibold">
                        available
                      </p>
                    </div>
                    <div className=" flex items-center gap-3 ">
                      <p className="capitalize text-[#828282]">cabin width: </p>
                      <p className="capitalize text-tertiary font-semibold">
                        10 cm
                      </p>
                    </div>
                    <div className=" flex items-center gap-3 ">
                      <p className="capitalize text-[#828282]">
                        cabin length:{" "}
                      </p>
                      <p className="capitalize text-tertiary font-semibold">
                        20 cm
                      </p>
                    </div>
                    <div className=" flex items-center gap-3 ">
                      <p className="capitalize text-[#828282]">
                        cabin height:{" "}
                      </p>
                      <p className="capitalize text-tertiary font-semibold">
                        15 cm
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-5">
                <Button full>edit</Button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AircraftDetails;
