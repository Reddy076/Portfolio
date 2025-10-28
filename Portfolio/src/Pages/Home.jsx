import StarBackground from "../Components/StarBackground";
import ThemeToggle from "../Components/ThemeToggle";
import Navbar from "../Components/Navbar";


export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">

      {
        /* Theme Toggle */
        <ThemeToggle />
      }
      {
        /* Background Effects */
        <StarBackground/>

      }

      {
        /* Navbar*/
        <Navbar/>
      }

      {
        /* Main Content */
      }

    </div>
  )
}
