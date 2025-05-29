import Card from '@/components/Card'
import Button from "@/components/Button";
const Landing: React.FC =  () => {
  return (
    <div>
        <h1 className=" text-xl font-extralight">Landing Page</h1>
        <Card />
        <Button title="Contact" styles="rounded-sm" />
        <Button title="Connect" styles="rounded-md" />
        <Button title="Buy Now" styles="rounded-lg" />
    </div>
  )
}
export default Landing