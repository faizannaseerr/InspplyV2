import { SignIn } from "@clerk/nextjs"

export default function Page() {
    return (
        <div className="flex justify-center items-center bg-gray-50 pt-32">
            <SignIn />
        </div>

    )
}