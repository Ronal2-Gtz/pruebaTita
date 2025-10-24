import { BiLoader } from 'react-icons/bi'

export const Loading = () => {
  return (
       <div className="w-screen h-screen flex flex-col justify-center items-center gap-4">
                <BiLoader className="animate-spin text-4xl text-white" />
                <p className="text-white text-lg">Loading...</p>
            </div>
  )
}
