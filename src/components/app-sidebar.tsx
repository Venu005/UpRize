"use client";
import {
  BrainCircuitIcon,
  CodeIcon,
  GitForkIcon,
  Globe2Icon,
  LogOutIcon,
  MailIcon,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuContent,
} from "./ui/dropdown-menu";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";
import { Button } from "./ui/button";
import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
import { Separator } from "./ui/separator";

// Menu items.
const items = [
  {
    title: "linkedin url",
    url: "#",
    icon: LinkedInLogoIcon,
  },
  {
    title: "Github url",
    url: "#",
    icon: GitHubLogoIcon,
  },
  {
    title: "twiiter accc",
    url: "#",
    icon: TwitterLogoIcon,
  },
  {
    title: "Website url",
    url: "#",
    icon: Globe2Icon,
  },
  {
    title: "Mail ",
    url: "#",
    icon: MailIcon,
  },
];

const leaderboardItems = [
  {
    title: "ML Hackathons",
    url: "#",
    icon: BrainCircuitIcon,
  },
  {
    title: "DSA Contests",
    url: "#",
    icon: CodeIcon,
  },
  {
    title: "Hackathons",
    url: "#",
    icon: GitForkIcon,
  },
];
export function AppSidebar() {
  const { state } = useSidebar();
  return (
    <Sidebar variant="floating" collapsible="icon">
      <SidebarHeader>
        {state === "collapsed" && <></>}
        {state === "expanded" && (
          <SidebarMenu>
            <SidebarMenuItem>
              <div className="flex items-center gap-2">
                <Avatar className="size-16">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className="flex flex-col">
                  <span className="truncate">Venusai Yalamanchili</span>
                  <span className="text-blue-400 font-extrabold">
                    @venusai17
                  </span>
                </div>
              </div>
            </SidebarMenuItem>
          </SidebarMenu>
        )}
      </SidebarHeader>
      <SidebarContent>
        {state === "expanded" && (
          <div className="flex justify-center w-full">
            <Button
              className="w-4/5 text-green-700 font-bold"
              variant={"sidebar"}
            >
              Edit Profile
            </Button>
          </div>
        )}
        <SidebarGroup>
          <SidebarGroupLabel>Socials</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
          <Separator />
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>Leaderboards</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {leaderboardItems.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton asChild>
                        <a href={item.url}>
                          <item.icon />
                          <span>{item.title}</span>
                        </a>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Avatar className="cursor-pointer size-8">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                side="top"
                className="w-[--radix-popper-anchor-width]"
              >
                <DropdownMenuItem>
                  <Button variant="ghost" className="flex items-center">
                    Logout
                    <LogOutIcon className="ml-2 size-4" />
                  </Button>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <div className="flex justify-center w-full">
                    <Button
                      className="w-4/5 text-green-700 font-bold"
                      variant={"sidebar"}
                    >
                      Edit Profile
                    </Button>
                  </div>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
