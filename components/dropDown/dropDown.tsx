
import { DropdownItem, DropdownMenu } from "@nextui-org/react"

export const DropDown: React.FC<{ onclick: (key: string) => void }> = ({ onclick }) => {
    return (
        <DropdownMenu className="bg-slate-700 text-white flex justify-start items-center flex-col rounded-md w-full focus:outline-none border-transparent focus:border-transparent focus:ring-0">
            <DropdownItem onClick={(e) => { onclick('1:1') }} className="rounded-md focus:outline-none border-transparent 
            focus:border-transparent focus:ring-0 text-xs  p-3 hover:cursor-pointer w-full transition delay-75 hover:bg-slate-900 active:bg-slate-900 active:opacity-40" key="1:1">1:1</DropdownItem>
            <DropdownItem onClick={(e) => { onclick('4:3') }} className="rounded-md focus:outline-none border-transparent
             focus:border-transparent focus:ring-0 text-xs  p-3 hover:cursor-pointer w-full transition delay-75 hover:bg-slate-900 active:bg-slate-900 active:opacity-40" key="4:3">4:3</DropdownItem>
             <DropdownItem onClick={(e) => { onclick('16:9') }} className="rounded-md focus:outline-none border-transparent
             focus:border-transparent focus:ring-0 text-xs  p-3 hover:cursor-pointer w-full transition delay-75 hover:bg-slate-900 active:bg-slate-900 active:opacity-40" key="16:9">16:9</DropdownItem>
             <DropdownItem onClick={(e) => { onclick('9:16') }} className="rounded-md focus:outline-none border-transparent
             focus:border-transparent focus:ring-0 text-xs  p-3 hover:cursor-pointer w-full transition delay-75 hover:bg-slate-900 active:bg-slate-900 active:opacity-40" key="9:16">9:16</DropdownItem>
        </DropdownMenu>
    )
}