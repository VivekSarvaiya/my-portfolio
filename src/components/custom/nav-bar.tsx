"use client";

import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from '@/components/ui/navigation-menu';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from 'lucide-react';

export function NavigationBar() {
    const scrolltoHash = function (element_id: string) {
        const element = document.getElementById(element_id)
        element?.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
    }

    const menuList: string[] = ["about", "experiences", "projects", "skills", "contact"]

    return (
        <>
            <NavigationMenu className="hidden sm:flex sm:sticky sm:top-0 min-w-full bg-black bg-opacity-20 backdrop-blur-sm container py-4 justify-between border-b border-border/40">
                <Avatar className="cursor-pointer" onClick={() => scrolltoHash("hero")}>
                    <AvatarImage src="/assets/img/logo.png" alt="@VivekSarvaiya" />
                    <AvatarFallback>VS</AvatarFallback>
                </Avatar>
                <NavigationMenuList className="w-full justify-end">
                    {
                        menuList.map(item => (
                            <NavigationMenuItem className="cursor-pointer capitalize" key={item}>
                                <NavigationMenuLink className={navigationMenuTriggerStyle()} onClick={() => scrolltoHash(item)}>
                                    {item}
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                        ))
                    }
                </NavigationMenuList>
            </NavigationMenu>
            <Sheet>
                <div className="sm:hidden sticky top-0 bg-black bg-opacity-20 backdrop-blur-lg container py-2 justify-between flex z-10">
                    <Avatar className="cursor-pointer" onClick={() => scrolltoHash("hero")}>
                        <AvatarImage src="/assets/img/logo.png" alt="@VivekSarvaiya" />
                        <AvatarFallback>VS</AvatarFallback>
                    </Avatar>
                    <SheetTrigger>
                        <Menu />
                    </SheetTrigger>
                </div>
                <SheetContent className="w-full flex items-center justify-center">
                    <NavigationMenu className="flex flex-col w-full">
                        <NavigationMenuList className="w-full justify-end flex-col pt-4">
                            {
                                menuList.map(item => (
                                    <SheetTrigger key={item}>
                                        <NavigationMenuItem className='capitalize'>
                                            <NavigationMenuLink className={navigationMenuTriggerStyle()} onClick={() => scrolltoHash(item)}>
                                                {item}
                                            </NavigationMenuLink>
                                        </NavigationMenuItem>
                                    </SheetTrigger>
                                ))
                            }
                        </NavigationMenuList>
                    </NavigationMenu>
                </SheetContent>
            </Sheet>
        </>
    )
}