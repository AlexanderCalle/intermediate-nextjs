import { GuestList } from "@/components/GuestList";
import { getGuestList } from "@/utils/attendees"
import { getCurrentUser } from "@/utils/users"

const GuestsPage = async () => {
  const user = await getCurrentUser()
  const guests = await getGuestList(user.id)

  return (
    <div className="w-full h-full p-4 flex justify-center">
      <div className="w-full">
        <h2 className="text-center text-xl mb-5">{`Guests`}</h2>
        <GuestList guests={guests} />
    </div>
  </div>
  )
}

export default GuestsPage