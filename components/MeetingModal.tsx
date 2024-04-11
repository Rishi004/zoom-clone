import { ReactNode } from "react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

interface MeetingModalProps {
    children?: ReactNode;
    isOpen: boolean;
    onClose: () => void;
    title: string;
    className?: string;
    buttonText?: string;
    handleClick?: () => void;
    image?: string;
    buttonIcon?: string;
}

const MeetingModal = ({
    children,
    isOpen,
    onClose,
    title,
    className,
    buttonText,
    handleClick,
    image,
    buttonIcon
}: MeetingModalProps) => {
    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="flex flex-col w-full max-w-[520px] gap-6 px-6 py-6 border-none bg-dark-1 text-white">
                <div className="flex flex-col gap-6">
                    {image && (
                        <div className="flex justify-center">
                            <Image
                                src={image}
                                alt="image"
                                width={72}
                                height={72}
                            />
                        </div>
                    )}
                    <h1
                        className={cn(
                            "text-3xl font-bold leading-[42px]",
                            className
                        )}
                    >
                        {title}
                    </h1>
                    <Button
                        className="bg-blue-1 focus-visible:ring-0 focus-visible:ring-offset-0"
                        onClick={handleClick}
                    >
                        {buttonIcon && (
                            <Image
                                src={buttonIcon}
                                alt="button icon"
                                width={13}
                                height={13}
                            />
                        )}
                        &nbsp;
                        {buttonText || "Schedule Meeting"}
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default MeetingModal;
