import { Button, Dropdown, DropdownTrigger } from "@nextui-org/react";
import { DropDown } from "../dropDown/dropDown";

export const MyTopToolbar: React.FC<{ dropDownClickHandler: (key: string) => void }> = ({ dropDownClickHandler }) => {

  return (
    <div className="w-[100vw] h-[var(--toobar-height)] border-b border-b-lime-600 sticky bg-white flex items-center justify-start" >

      <Button className="rounded-md px-3 py-2  mx-5 text-sm font-medium text-white bg-slate-800" aria-current="page">Add Text</Button>
      <Dropdown>
        <DropdownTrigger >
          <Button
            className="w-44 px-3 py-2  mx-5 text-sm rounded-md
            bg-slate-800 text-white  flex justify-center items-center transition delay-75 ease-linear hover:bg-slate-900">
            Aspect Ratio
            <span className="flex justify-center items-center">
              <img className="w-2 h-2 rounded-full mx-2" src="/bottomArrowIcon.svg" alt="Rounded avatar"></img>
            </span>
          </Button>
        </DropdownTrigger>
        <DropDown onclick={dropDownClickHandler} />
      </Dropdown>

    </div>
  )

}

