import Card from '@/components/Card'
import Button from "@/components/Button";
const Landing: React.FC =  () => {
  return (
    <div>
      <h1 className=" text-xl font-extralight">Landing Page</h1>
      <Card />
      <div className="mt-8 flex flex-col gap-4">
  <h2 className="text-lg font-bold">Reusable Buttons</h2>
  <Button title="Small Rounded-sm" styles="text-sm w-1/5 rounded-sm" />
  <Button title="Medium Rounded-md" styles="text-base w-1/5 rounded-md" />
  <Button title="Large Rounded-full" styles="text-lg w-1/5 rounded-full" />
</div>
    </div>
  )
}
export default Landing