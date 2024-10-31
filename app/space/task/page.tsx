import Sidebar from "@/components/Sidebar/Sidebar";
import TaskList from "@/components/TaskList/TaskList";

export default function Tasks() {
    return (
        <main className="flex min-h-screen flex-row">
            <Sidebar />
            <TaskList />
        </main>
    );
}