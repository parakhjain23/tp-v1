import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

function NewProductSpaceModal({
    isEdit = false
}) {
    return (
        <Dialog>
            <DialogTrigger asChild>
                {!isEdit ? <button className="signUpBtn rounded-md bg-white bg-opacity-20 px-6 py-2 text-base font-medium duration-300 ease-in-out hover:bg-opacity-100 hover:text-secondary ml-2">
                    Create New ProductSpace
                </button> : <button className="text-blue-500 hover:text-blue-700 transition">
                    Edit
                </button>}
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>{!isEdit ? 'Create space' : 'Edit space'}</DialogTitle>
                    <DialogDescription>
                        Personalize your Product Space
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="name" className="text-right">
                            Name
                        </Label>
                        <Input id="name" value="Pedro Duarte" className="col-span-3" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="username" className="text-right">
                            Description
                        </Label>
                        <Input id="username" value="@peduarte" className="col-span-3" />
                    </div>
                </div>
                <DialogFooter>
                    <Button type="submit">{!isEdit ? 'Create' : 'Save changes'}</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>

    )
}

export default NewProductSpaceModal