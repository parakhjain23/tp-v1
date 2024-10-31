import { MODALS } from '@/utils/utility'
import React from 'react'

function TaskEditModal() {
    return (
        <dialog id={MODALS.taskEditModal} className="modal">
            <div className="modal-box">
                <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                </form>
                <div className='flex flex-col gap-3'>
                    <h3 className="font-bold text-lg">Task Info</h3>
                    <input type="text" placeholder="Task title" className="input input-bordered w-full" />
                    <textarea className="textarea textarea-bordered w-full" placeholder="Task Description"></textarea>
                </div>
            </div>
            <form method="dialog" className="modal-backdrop">
                <button>close</button>
            </form>
        </dialog>
    )
}

export default TaskEditModal