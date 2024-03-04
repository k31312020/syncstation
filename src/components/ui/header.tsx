import { MainNav } from "./main-nav";
import { ModeToggle } from "./mode-toggle";
import { UserNav } from "./user-nav";

export function AppHeader() {
    return (
        <div className="border-b">
            <div className="flex h-16 items-center px-4">
                <div className="font-bold">
                    AwesomeCMS
                </div>
                <MainNav className="mx-6" />
                <div className="flex items-center space-x-4 ml-auto">
                    <UserNav />
                    <ModeToggle />
                </div>
            </div>
        </div>
    )
}