import { MODALS } from '@/utils/utility'
import React from 'react'

function TaskEditModal() {
    return (
        <dialog id={MODALS.taskEditModal} className="modal">
            <div className="modal-box w-full max-w-4xl">
                <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                </form>
                <div className='flex flex-col gap-3'>
                    <h3 className="font-bold text-lg text-primary">Task Info</h3>

                    {/* Task Title */}
                    <div className="">
                        <label className="label-text">Title</label>
                        <input type="text" placeholder="Task title" className="input input-bordered w-full" />
                    </div>

                    {/* Task Description */}
                    <div className="">
                        <label className="label-text">Description</label>
                        <textarea className="textarea textarea-bordered w-full" placeholder="Task Description"></textarea>
                    </div>

                    {/* Priority */}
                    <div className="">
                        <label className="label-text-alt">Priority</label>
                        <select className="select select-bordered w-full">
                            <option>Low</option>
                            <option>Medium</option>
                            <option>High</option>
                            <option>Critical</option>
                        </select>
                    </div>

                    {/* Status */}
                    <div className="">
                        <label className="label-text-alt">Status</label>
                        <select className="select select-bordered w-full">
                            <option>To Do</option>
                            <option>In Progress</option>
                            <option>Completed</option>
                            <option>Blocked</option>
                        </select>
                    </div>

                    {/* ETA */}
                    <div className="">
                        <label className="label-text-alt">ETA</label>
                        <input type="datetime-local" className="input input-bordered w-full" />
                    </div>

                    {/* Assignee */}
                    <div className="">
                        <label className="label-text-alt">Assignee</label>
                        <input type="text" className="input input-bordered w-full" placeholder="Assign to" />
                    </div>
                </div>
                <div className="modal-action">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-ghost">Close</button>
                        <button type="button" className="btn btn-primary">
                            Save
                        </button>
                    </form>
                </div>
            </div>
            <form method="dialog" className="modal-backdrop">
                <button>close</button>
            </form>
        </dialog>
    )
}

export default TaskEditModal
