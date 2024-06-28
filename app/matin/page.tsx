"use client"
import { useEffect, useState } from "react"
import { MyTopToolbar } from "../../components/topToolbar/topToolbar"
import { calculateDimensions } from "../../helpers/dimensionCalculator"
import { Button, Input } from "@nextui-org/react"
import { Main } from "../../remotion/MyComp/Main"
import { Player } from "@remotion/player"
import { DURATION_IN_FRAMES, VIDEO_FPS } from "../../types/constants"
const Page: React.FC = () => {

  const [videoDimentison, setVideoDimentiso] = useState({ width: 500, height: 500 })
  const [text, SetText] = useState<{ title: string }>({ title: "test Text" })

  const dropDownClickHandler = (key: string) => {
    const result = calculateDimensions(key)
    setVideoDimentiso(result)

  }

  useEffect(() => {
    console.log(videoDimentison)
  }, [videoDimentison])

  return (
    <div className="w-full h-[calc(100vh+10px-var(--toobar-height))] m-0 p-0 relative bg-[#151533] ">
      <MyTopToolbar dropDownClickHandler={dropDownClickHandler} />

      <div className="relative ">

        <div className="flex flex-row  justify-start px-6 items-center my-4">
          <Input
            type="text"
            label="Text"
            defaultValue="test Text"
            className="max-w-xs"
            value={text.title}
            onChange={(e) => { SetText({ title: e.target.value }) }}
          />

          <Button className="mx-3">
            Render
          </Button>
        </div>
        <div className="flex flex-row w-full  justify-center px-6 items-center my-4  h-96 mt-7">
          <Player
            component={Main}
            inputProps={text}
            durationInFrames={DURATION_IN_FRAMES}
            fps={VIDEO_FPS}
            compositionHeight={videoDimentison.height}
            compositionWidth={videoDimentison.width}
            style={{
              // Can't use tailwind class for width since player's default styles take presedence over tailwind's,
              // but not over inline styles
              // width: "100%",
            }}
            controls
            autoPlay
          />
        </div>

      </div>
    </div>
  )

}

export default Page