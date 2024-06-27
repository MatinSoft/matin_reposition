"use client"
import { useEffect, useState } from "react"
import { MyTopToolbar } from "../../components/topToolbar/topToolbar"
import { calculateDimensions } from "../../helpers/dimensionCalculator"
const Page: React.FC = () => {

  const [videoDimentison, setVideoDimentiso] = useState({ width: 500, height: 500 })

  const dropDownClickHandler = (key: string) => {
    const result = calculateDimensions(key)
    setVideoDimentiso(result)

  }

  useEffect(()=>{
    console.log(videoDimentison)
  },[videoDimentison])

  return (
    <MyTopToolbar dropDownClickHandler={dropDownClickHandler} />
  )

}

export default Page